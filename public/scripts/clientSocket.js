//injected from socket.io
var socket = io();

//client event handlers here
function addSocketEvents(socket){
  socket.on("msg",function(data){
    console.log(data);
    document.getElementById("messages").innerHTML +=data+"<br>";
    // alert(data);
  })
}
//add the event handlers to the client socket
addSocketEvents(socket);