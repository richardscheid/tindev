const express = require('express'); // import

const server = express(); // creating server

// creating path
server.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

server.listen(3030); // port config

