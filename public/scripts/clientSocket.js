//injected from socket.io
var socket = io();

//client event handlers here
function addSocketEvents(socket){
  socket.on("event",function(data){
    // alert(data);
  })
}
//add the event handlers to the client socket
addSocketEvents(socket);