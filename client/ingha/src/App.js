import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Button } from "shards-react"
import { FormSelect } from "shards-react";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

function App() {
  const selectRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userInfos, setUserInfos] = useState({ });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch('http://stacksnote.com/users');
      const users = await response.json();

      setUsers(users);
      setLoading(false);

      // for (let i = 0; i < users.length; i ++) {
      //   const name = users[i];

        
      // }
    })();

    selectRef.current.addEventListener('change', (event) => {
      const value = event.target.value;

      setSelectedUser(value);
    });

    return () => { };
  }, []);

  useEffect(() => {
    (async () => {
      await setUserInfo(selectedUser);
    })();
  }, [selectedUser])

  const getUserLoggedInUrl = async (user) => {
    const response = await fetch(`http://stacksnote.com/logged-in-url/${user}`);
    const url = await response.text();

    return url;
  };

  const getUserInfo = async (user) => {
    const response = await fetch(`http://stacksnote.com/user-info/${user}`);
    const info = await response.json();

    return info;
  };

  const setUserInfo = async (name) => {
    const info = await getUserInfo(name);

    setUserInfos({ ...userInfos, [name]: info });
  };

  const login = async () => {
    setLoading(true);
    const url = await getUserLoggedInUrl(selectedUser);

    window.location = url;
    setLoading(false);
  };

  return (
    <div className="App">
      <FormSelect innerRef={selectRef}>
        <option>Ingen vald</option>
        {users.map((name) => {
          return (<option value={name} key={name}>{name}</option>)
        })}
      </FormSelect>
      <br />
      <Fragment>
        {!loading &&
          <Button onClick={login} disabled={!selectedUser}>
            Logga in
          </Button>}
        {loading && <div class="loader"></div>}
      </Fragment>
      <div>
        {Object.keys(userInfos).map((name) => {
          const userInfo = userInfos[name];

          return (
            <div key={name}>
              <div style={{ fontWeight: 'bold' }}>{userInfo.nick}:</div>
              <div>{userInfo.attempts}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
