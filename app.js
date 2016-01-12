var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.use(bodyParser.json());

var port = parseInt(process.env.PORT) || parseInt(process.env.VCAP_APP_PORT) || 3000;

app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Event Webhookの受信
app.post('/EventReceiver', function(req, res) {
  req.body.forEach(function(elm, idx, arr) {
    console.log(elm);
  });
  res.send('Success');
});

// Parse Webhookの受信
app.post('/ParseReceiver', upload.any(), function(req, res) {
  // テキストフィールド
  console.log(req.body);
  // 添付ファイル
  req.files.forEach(function(elm, idx, arr) {
    console.log(elm);
  });
  res.send('Success');
});

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
