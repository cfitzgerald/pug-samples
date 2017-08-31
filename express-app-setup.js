//////////////////////
// Express app setup
// ex: app.js
//////////////////////

// 1. require pug
const pug = require('pug');

// 2. template engine setup
app.set('views', './views'); // set 'views' to specify the templates dir
app.set('view engine', 'pug'); // set 'view engine' to specify pug
