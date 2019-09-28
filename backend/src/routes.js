const express = require('express'); // import
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

// creating path
routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/dev', (req, res) => {
    return res.json(req.body);
});

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;