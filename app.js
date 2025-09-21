const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));