var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

var db = require('./models');

// sets path for server to use public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// sets up express to use handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// sets express to use routes in the *controller.js file
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, function () {
    console.log('App listening on PORT ' + port);
  });
});
