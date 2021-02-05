//node module includes
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
let express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();
var http = require('http').Server(app);
let io = require('socket.io')(http);
const request = require('request');
var fs = require('fs');

//custom includes
var StoryCards = require('./storyCards.js');
var CardTable = require('./cardTable.js');

//express client files
app.use(express.static('public'));
//config body parser middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//express html directs
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/addcard', function(req, res){
  res.sendFile(__dirname + '/addCard.html');
});
app.get('/cardjson', function(req, res){
  res.sendFile(__dirname + '/carddata.json');
});
//express post requests
app.post('/addNewCard', function(req, res, next){

  cards.addNewCard(req.body);

});
//express post requests
app.post('/saveCards', function(req, res, next){

  save(cards);

});

function load(cards){
  data = JSON.parse(fs.readFileSync(__dirname + '/carddata.json').toString());
  cards.load(data);
}

function save(data){
  fs.writeFile(__dirname + '/carddata.json', JSON.stringify(data), function() { return true; });
}

var cards = new StoryCards.StoryCards();
load(cards);
var table = new CardTable.CardTable();

function deal(type){
  var deck = {};
  switch(type){
    case "monster":
      deck = cards.monsters;
      break;
    case "race":
      deck = cards.races;
      break;
    case "item":
      deck = cards.weapons;
      break;
    case "location":
      deck = cards.locations;
      break;
  }
  table.addCard(deck.draw(),type);
  updateClients();
}

//console.log(table.makeClientData());

io.on('connection', function(socket){
  console.log(" a user connected");
  updateClients();
  socket.on('moveCard',function(data){
    table.moveCard(data.index,data.x,data.y);
    updateClients();
  });
  socket.on('removeCard',function(index){
    table.removeCard(index);
    updateClients();
  });
  socket.on('deal',function(type){
    deal(type);
  });
  socket.on('roll',function(){
    table.rollDice();
    updateClients();
  });
  // socket.on('msg',function(data){
  //   io.emit('msg',socket.playerName+" : " +data.msg);
  // });
  // socket.on('shape',function(data){
  //   io.emit('shape',data);
  //   whiteboard.addToDrawing(data);
  // });
  // socket.on('requestDrawing',function(){
  //   io.emit('shape',whiteboard.getCurrentDrawing());
  // });
  // socket.on('clearDrawing',function(){
  //   whiteboard.clearDrawing();
  //   io.emit('erase');
  // });
});

function updateClients(){
  io.emit('tableData',table.makeClientData());
}



http.listen(process.env.PORT || 3000, function(){});