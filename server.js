var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
//var board-data = require('./board-data');
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('index-page');
});

app.get('*', function (req, res, next){
    res.status(404).render('404-page');
}); 

app.listen(port, function () {
  console.log("== Listening on port", port);
});
