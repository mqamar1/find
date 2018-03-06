var express = require('express');
var bodyParser = require('body-parser')
//var jsonParser = bodyParser.json()
var app = express();
var PORT = process.env.PORT || 8080;

app.use(urlencodedParser = bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({ type: 'text/html' }))




require("./routing/apiRoutes")(app);
require("./routing/html")(app);

app.listen(PORT, function(){
  console.log("App listening on PORT:" + PORT);
});
