var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 1337;

app.use(express.static('public'));

if (!isProduction) {
  var bundle = require('./serverBundler.js');
  bundle();

  app.all('/bundle.js', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080',
    });
  });
}

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.listen(port, function () {
  console.log('Server running on port '+port+'!');
});
