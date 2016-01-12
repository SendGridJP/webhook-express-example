var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.use(bodyParser.json());

var root = '/webhook-express-example';

app.get(root + '/', function(req, res) {
  res.send('Hello World!');
});

// Event Webhookの受信
app.post(root + '/EventReceiver', function(req, res) {
  for (var event of req.body) {
    console.log(event);
  }
  res.send('Success');
});

// Parse Webhookの受信
app.post(root + '/ParseReceiver', upload.any(), function(req, res) {
  // テキストフィールド
  console.log(req.body);
  // 添付ファイル
  for (var file of req.files) {
    console.log(file);
  }
  res.send('Success');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
