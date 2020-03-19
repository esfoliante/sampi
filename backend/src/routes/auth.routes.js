const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/', UserController.index);
routes.post('/register', UserController.store);
routes.post('/login', UserController.login);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.delete);

module.exports = routes;
