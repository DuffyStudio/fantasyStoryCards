//node module includes
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
let express = require('express');
var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);
const request = require('request');

//custom includes
var game = require('./game.js');
//express client files
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(socket){
  var data = "this is a test";
  io.emit("event",data);
  // console.log('A user connected.');
  // console.log('Assigning player id '+nextPlayerId);
  // socket.playerId = nextPlayerId;
  // nextPlayerId++;
  // socket.on('playerJoin',function(data){
  //   game.addPlayer(socket.playerId,socket.id,data.name,data.color);
  // });
  // socket.on('playerDie',function(){
  //   game.removePlayer(socket.playerId);
  // });
  // socket.on('disconnect', function(){
  //   console.log('player id '+socket.playerId + ' disconnected');
  //   game.removePlayer(socket.playerId);
  // });
  // socket.on('playerTurn', function(data){
  //   game.turnPlayer(socket.playerId,data);
  // });
  // socket.on('playerGrow', function(){
  //   game.growPlayer(socket.playerId);
  // });
  // socket.on('playerShrink', function(){
  //   game.shrinkPlayer(socket.playerId);
  // });
  // game.emitHighScores();
});

http.listen(process.env.PORT || 3000, function(){});