const express = require('express'); // import
const DevController = require('./controllers/DevController');

const routes = express.Router();

// creating path
routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/dev', (req, res) => {
    return res.json(req.body);
});

routes.post('/devs', DevController.store);

module.exports = routes;