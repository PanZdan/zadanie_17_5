var express = require("express");
var app = express();

app.use(express.static("assets"));

app.use("/store", function(req, res, next) {
  console.log("Hej, jestem pośrednikiem między żądaniem a odpowiedzią!");
  next();
});

app.get("/", function(req, res) {
  console.log("Otrzymałem żadanie GET do strony głównej.");
  res.sendFile("/index.html");
});

app.get("/store", function(req, res) {
  console.log("Hej, jestem posrednikiem przy żądaniu do /store");
  res.end("To jest sklep");
});

app.get("/userform", function(req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    "Przykładowa aplikacja nasłuchuje na http://" + host + ":" + port
  );
});
