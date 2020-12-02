//injected from socket.io
var socket = io();

//client event handlers here
function addSocketEvents(socket){
  socket.on("msg",function(data){
    console.log(data);
    var msgDiv = document.getElementById("box1");
    msgDiv.innerHTML +=data+"<br>";
    msgDiv.scrollTop = msgDiv.scrollHeight;
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
