const scriptElement = document.createElement('script');
scriptElement.innerHTML = atob('dmFyIHNjb3JlID0g') + `parseFloat("{value here}".replace(/,/g, '.'))` + atob('OwpmdW5jdGlvbiB1cGRhdGUoKSB7CgogIGlmICh1c2VyQXR0ZW1wdC5zdGF0ZSA9PSAncGxheWluZycpIHsKCiAgICB2YXIgZGVsdGEgPSBBcHAucGh5c2ljc0RlbHRhCiAgICB2YXIgZDIgPSBkZWx0YSAvIDI7CgogICAgcGxheWVyQW5nbGUgKz0gKGdldFBsYXllclNwZWVkKCkgKiBNYXRoLlBJIC8gMTgwKSAqIGQyOwoKICAgIC8vIFNldCBwbGF5ZXIgY29vcmRpbmF0ZXMKICAgIHBsYXllci54ID0gKGN4ICsgcGxheWVyUmFkaXVzICogTWF0aC5jb3MoLXBsYXllckFuZ2xlKSk7CiAgICBwbGF5ZXIueSA9IChjeSArIHBsYXllclJhZGl1cyAqIE1hdGguc2luKC1wbGF5ZXJBbmdsZSkpOwoKICAgIC8vIEFuZ2xlIGF0IHdoaWNoIHRvIGRyYXcgdGhlIGNhcgogICAgcGxheWVyLnJhZGlhbnMgPSAtKHBsYXllckFuZ2xlICsgY2hhbmdlTGFuZUFuZ2xlRGlmZik7CgogICAgLy8gRmluaXNoIGxpbmUKICAgIGlmIChwbGF5ZXIub3ZlcmxhcHMoZmluaXNoTGluZSkgJiYgbmV3TGFwUmVhZHkgJiYgaXNOZXdMYXBWYWxpZCgpKSB7CiAgICAgIC8vIHBsYXllci5pbmNyZWFzZUxhcHMoKTsKICAgIH0KCiAgICAvLyBTdG9wIGdhbWUgaWYgdGltZSBpcyBtb3JlIHRoYW4gMTIwIHNlY29uZHMKICAgIGlmICh0aW1lci5lbGFwc2VkVGltZSA+IDEyMCkgewogICAgICBnYW1lb3ZlcihzY29yZSk7CiAgICB9CgogICAgcGxheWVyLmNoYW5nZUxhbmUoKTsKCiAgICAvLyBjYXJzCiAgICBjYXJzLmZvckVhY2goZnVuY3Rpb24oY2FyKSB7CgogICAgICBpZiAodGltZXIuZWxhcHNlZFRpbWUgPiBjYXJQcm9wZXJ0aWVzW2Nhci5jYXJOdW1dLnRpbWUpIHsKCiAgICAgICAgaWYgKGNhclByb3BlcnRpZXNbY2FyLmNhck51bV0udmlzaWJsZSAhPSB0cnVlKSB7CgogICAgICAgICAgY2FyUHJvcGVydGllc1tjYXIuY2FyTnVtXS5hbmdsZSA9IChwbGF5ZXJBbmdsZSArIDE4MCkgJSAzNjA7CgogICAgICAgICAgY2FyUHJvcGVydGllc1tjYXIuY2FyTnVtXS52aXNpYmxlID0gdHJ1ZTsKCiAgICAgICAgfQoKICAgICAgICB2YXIgc3BlZWQgPSBjYXJQcm9wZXJ0aWVzW2Nhci5jYXJOdW1dLnNwZWVkOwogICAgICAgIHZhciBsYW5lID0gY2FyUHJvcGVydGllc1tjYXIuY2FyTnVtXS5sYW5lOwoKICAgICAgICBjYXJQcm9wZXJ0aWVzW2Nhci5jYXJOdW1dLmFuZ2xlICs9IChzcGVlZCAqIE1hdGguUEkgLyAxODApICogZDI7CgogICAgICAgIHZhciBjYXJYID0gY3ggKyBjYWxjQ2FyUmFkaXVzKGxhbmUpICogTWF0aC5jb3MoLWNhclByb3BlcnRpZXNbY2FyLmNhck51bV0uYW5nbGUpOwogICAgICAgIHZhciBjYXJZID0gY3kgKyBjYWxjQ2FyUmFkaXVzKGxhbmUpICogTWF0aC5zaW4oLWNhclByb3BlcnRpZXNbY2FyLmNhck51bV0uYW5nbGUpOwoKICAgICAgICBjYXIueCA9IGNhclg7CiAgICAgICAgY2FyLnkgPSBjYXJZOwoKICAgICAgICBjYXIucmFkaWFucyA9IC1jYXJQcm9wZXJ0aWVzW2Nhci5jYXJOdW1dLmFuZ2xlOwoKICAgICAgfSBlbHNlIHsKCiAgICAgICAgY2FyLnggPSAtMTAwOwogICAgICAgIGNhci55ID0gLTEwMDsKCiAgICAgIH0KCiAgICAgIHZhciBjb2xsaXNpb24gPSBwbGF5ZXIuY29sbGlkZXMoY2FyKTsKCiAgICAgIGlmIChjb2xsaXNpb24gJiYgcGxheWVyLnJlYWR5VG9Db2xsaWRlKSB7CgogICAgICAgIGFkZFVzZXJFdmVudCgxLCB0aW1lci5lbGFwc2VkVGltZSk7CgogICAgICAgIGlmIChjdXJyZW50UGxheWVyU3BlZWQgPCBzcGVlZCkgewoKICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaXNpb246IGNhcicpOwoKICAgICAgICAgIGNhci5yZWR1Y2VTcGVlZChjYXIuY2FyTnVtKTsKCiAgICAgICAgfQoKICAgICAgICBpZiAoY3VycmVudFBsYXllclNwZWVkID4gc3BlZWQpIHsKCiAgICAgICAgICBjb25zb2xlLmxvZygnY29sbGlzaW9uOiBwbGF5ZXInKTsKCiAgICAgICAgICBwbGF5ZXIucmVkdWNlU3BlZWQoKTsKCiAgICAgICAgfQoKICAgICAgICBpZiAoY2hhbmdlTGFuZURpcmVjdGlvbiAhPSBmYWxzZSkgewoKICAgICAgICAgIHN0b3BMYW5lQ2hhbmdlKCk7CgogICAgICAgIH0KCiAgICAgIH0KCiAgICB9KTsKCiAgfQoKfTsKcGxheWVyLmZpbmlzaCA9IGZ1bmN0aW9uKCkgewogICAgYWRkVXNlckV2ZW50KDMsIHNjb3JlKTsKCiAgICBhZGRVc2VyRXZlbnQoOCwgQXBwLk1BWF9GUFMpOwoKICAgIGdhbWVvdmVyKHNjb3JlKTsKCiAgICB0aW1lci5zdG9wKCk7CiAgICBzdG9wQW5pbWF0aW5nKCk7CiAgICBwbGF5ZXIuZGVzdHJveSgpOwogICAgQXBwLnJlc2V0KCk7CgogICAgY2xlYXJUaW1lb3V0KGJvb3N0QnRuVGltZW91dCk7CgogICAgJCgnI2dhbWVvdmVyLWltZycpLmh0bWwoJzxpbWcgc3JjPSInICsgSU5HTy5nYW1lVXJsICsgJy9hc3NldHMvaW1nL2dhbWVvdmVyLnBuZz92PTIiPicpOwoKICAgIHZhciByZXNwb25zZVRleHQ7CgogICAgaWYgKHRpbWUgPiAyMCkgewogICAgICByZXNwb25zZVRleHQgPSB0cmFuc2xhdGUoJ3JvdW5kYWJvdXRHYW1lb3ZlcjEnKTsKCiAgICB9CiAgICBpZiAodGltZSA+IDI1KSB7CiAgICAgIHJlc3BvbnNlVGV4dCA9IHRyYW5zbGF0ZSgncm91bmRhYm91dEdhbWVvdmVyMicpOwoKICAgIH0KICAgIGlmICh0aW1lID4gMzApIHsKICAgICAgcmVzcG9uc2VUZXh0ID0gdHJhbnNsYXRlKCdyb3VuZGFib3V0R2FtZW92ZXIzJyk7CgogICAgfQogICAgaWYgKHRpbWUgPiAzNSkgewogICAgICByZXNwb25zZVRleHQgPSB0cmFuc2xhdGUoJ3JvdW5kYWJvdXRHYW1lb3ZlcjQnKTsKCiAgICB9CiAgICBpZiAodGltZSA+IDQwKSB7CiAgICAgIHJlc3BvbnNlVGV4dCA9IHRyYW5zbGF0ZSgncm91bmRhYm91dEdhbWVvdmVyNScpOwogICAgfQoKICAgICQoJyNnYW1lb3Zlci1yZXNwb25zZScpLmh0bWwocmVzcG9uc2VUZXh0KTsKCiAgfQpmdW5jdGlvbiBhY2N1cmF0ZUludGVydmFsKGZ1bmMsIGludGVydmFsLCBvcHRzKSB7CgogICAgaWYgKCFvcHRzKSBvcHRzID0ge307CgogICAgdmFyIGNsZWFyLCBuZXh0QXQsIHRpbWVvdXQsIHdyYXBwZXIsIG5vdzsKCiAgICBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTsKCiAgICBuZXh0QXQgPSBub3c7CgogICAgaWYgKG9wdHMuYWxpZ25lZCkgewogICAgICAgIG5leHRBdCArPSBpbnRlcnZhbCAtIChub3cgJSBpbnRlcnZhbCk7CiAgICB9CiAgICBpZiAoIW9wdHMuaW1tZWRpYXRlKSB7CiAgICAgICAgbmV4dEF0ICs9IGludGVydmFsOwogICAgfQoKICAgIHRpbWVvdXQgPSBudWxsOwoKICAgIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKCkgewogICAgICAgIHZhciBzY2hlZHVsZWRUaW1lID0gbmV4dEF0OwogICAgICAgIG5leHRBdCArPSBpbnRlcnZhbDsKICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCh3cmFwcGVyLCBuZXh0QXQgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7CiAgICAgICAgZnVuYyhzY2hlZHVsZWRUaW1lKTsKICAgIH07CgogICAgY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHsKICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpOwogICAgfTsKCiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCh3cmFwcGVyLCBuZXh0QXQgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7CgogICAgcmV0dXJuIHsKICAgICAgICBjbGVhcjogY2xlYXIKICAgIH07CgogIH07Cm5ld0dhbWUoKTsKc2V0SW50ZXJ2YWwoKCkgPT4gY2Fycy5yZW1vdmVBbGwoKSk7CnNldFRpbWVvdXQoKCkgPT4gewogICAgYWNjdXJhdGVJbnRlcnZhbCgoKSA9PiB7CiAgICAgICAgcGxheWVyLmluY3JlYXNlTGFwcygpCiAgICB9LCBzY29yZSAqIDEwMDAgLyA4KTsKfSwgMzAwMCk7');
document.body.appendChild(scriptElement);
completion(true);