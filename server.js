
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// this is middleware - tells server that incoming data is a JSON Object
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 'starts' routes essentially
// in user-route.js required {User} is run to create User TABLE in mysql db
app.use(routes);

// turn on connect to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});