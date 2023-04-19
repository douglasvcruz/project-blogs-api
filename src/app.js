require('express-async-errors');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const { loginAuthorization } = require('./controllers/login.controller');
const { validateLogin } = require('./middlewares/validateLogin');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, loginAuthorization);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
