require('express-async-errors');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const { loginControllers, userControllers } = require('./controllers');
const { validateLogin, validateUser, validateToken } = require('./middlewares');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, loginControllers.loginAuthorization);

app.post('/user', validateUser.validateUser, userControllers.createUser);

app.get('/user', validateToken, userControllers.getAll);

app.get('/user/:id', validateToken, validateUser.validateUserById, userControllers.getById);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
