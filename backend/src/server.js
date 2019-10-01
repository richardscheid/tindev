const express = require('express'); // import
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const server = express(); // creating server

mongoose.connect('mongodb+srv://onmistack:onmistack@cluster0-mzlt4.mongodb.net/onmistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3030); // port config

