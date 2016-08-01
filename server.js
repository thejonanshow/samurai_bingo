var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var database = process.env.MONGODB_URI || 'mongodb://localhost/samuraibingo'
mongoose.connect(database)

var port = process.env.PORT || 3000

var Square = mongoose.model('Square', { text: String });

var screaming = new Square({ text: 'Samurai screams' });

screaming.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('アタック!');
  }
});

app.get('/', function (req, res) {
  res.sendFile('index.html')
});

app.get('/api/squares', function (req, res) {
  Square.find(function (err, squares) {
    res.json(squares);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
