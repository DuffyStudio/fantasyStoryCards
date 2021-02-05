//injected from socket.io
var socket = io();

//client event handlers here
function addSocketEvents(socket){

  socket.on('tableData',function(data){
    document.body.innerHTML="";
    makeControls();
    for (var i=0;i<data.cards.length; i++){
      makeCardGraphics(data.cards[i],i);
    }
  });
}
//add the event handlers to the client socket
addSocketEvents(socket);

function moveCard(index,x,y){
  var data ={};
  data.index = index;
  data.x = x;
  data.y = y;
  socket.emit('moveCard', data);
}
function deal(type){
  socket.emit('deal',type);
}
function removeCard(index){
  socket.emit('removeCard',index);
};