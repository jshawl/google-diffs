var express = require("express")
var app = express()
app.set('view engine','hbs')

app.get("/", function(req, res){
  res.render("index")
})

var port = 3000
var host = "http://localhost"
app.listen(port, function(){
  console.log(host+":"+port)
})