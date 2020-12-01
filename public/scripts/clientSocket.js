//injected from socket.io
var socket = io();

//client event handlers here
function addSocketEvents(socket){
  socket.on("msg",function(data){
    console.log(data);
    document.getElementById("box1").innerHTML +=data+"<br>";
    // alert(data);
  });
  socket.on('shape',function(data){
    for (var point of data){
      makeMark(point);
    }
  });
  socket.on('erase',function(){
    clearCanvas();
  });
}
//add the event handlers to the client socket
addSocketEvents(socket);
