require('express-async-errors');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const { loginAuthorization, createUser } = require('./controllers');
const { validateLogin, validateUser } = require('./middlewares');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin.validateLogin, loginAuthorization);

app.post('/user', validateUser.validateUser, createUser);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
