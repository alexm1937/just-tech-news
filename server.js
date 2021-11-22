
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//handlebar.js:
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

//tells express to use handlebars?
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// this is middleware - tells server that incoming data is a JSON Object
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// 'starts' routes essentially
// in user-route.js required {User} is run to create User TABLE in mysql db
app.use(routes);

// turn on connect to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});