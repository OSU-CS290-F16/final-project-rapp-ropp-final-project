var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
//var usersData = require('./package');
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
  res.render('index.html');
});




/* app.use(function(req, res, next){
    res.status(404).render('404');
}); 

For 404 page when done.*/

app.listen(port, function () {
  console.log("== Listening on port", port);
});
