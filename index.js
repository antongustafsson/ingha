const express = require('express');
const inghaApi = require('./ingha-api');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send(fs.readFileSync('./static/index.html').toString());
// });
app.get('/options', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked'
    });
    
    res.write(`/set-order?order={order}\n/set-top&username={username}&password={password}\n/set-top-by-name&name={name}`);
    res.end();
})

app.get('/set-order', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked'
    });    

    const order = req.query['order'];

    if (!order) {
        res.write('Specify order');
        return res.end();
    }

    const users = order.split(',');
    const invalidUser = users.find(user => !inghaApi.userIsRegistered(user));

    if (invalidUser) {
        res.write(`User not registered: ${invalidUser}`);
        return res.end();
    }

    inghaApi.setOutHandler(data => {
        res.write(`Output: ${JSON.stringify(data)}\n`);
    });

    inghaApi.setOrder(order, (progress) => {
        res.write(`${progress * 100}%\n`);
        res.end();
    }).then(() => {
        res.write('Done\n');
        res.end();
    })
});

app.get('/set-top', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked'
    });    
    const { username, password, score = null } = req.query;

    if (username && password) {
        inghaApi.setOutHandler(data => {
            res.write(`Output: ${JSON.stringify(data)}\n`);
        });    

        inghaApi.setTop(username, password, parseFloat(score)).then(() => {
            res.write('Done\n');
            res.end();
        });
    } else {
        res.write('Parameters username and password are required');
        res.end();
    }
});

app.get('/set-top-by-name', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked'
    });
    const { name, score = null } = req.query;

    if (!name) {
        res.write('Parameter "name" is required');
        return res.end();
    } else {
        inghaApi.setOutHandler(data => {
            res.write(`Output: ${JSON.stringify(data)}\n`);
        });    

        inghaApi.setTopByName(name, parseFloat(score)).then(() => {
            res.write('Done\n');
            res.end();
        });
    }
})

app.get('/user-info/:user', async (req, res) => {
    const { username, password } = inghaApi.getUserCredentials(req.params.user);
    const data = await inghaApi.getUserInfoByCredentials(username, password);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.contentType('application/json');
    res.send(data);
});

app.get('/users', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(inghaApi.getUsers());
});

app.get('/logged-in-url/:user', async (req, res) => {
    const url = await inghaApi.getLoggedInUrlByName(req.params.user);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.contentType('application/json');
    res.send(url);
});


app.listen(80);
