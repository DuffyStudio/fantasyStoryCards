var pName = prompt("Enter your name");
socket.emit('playerName',pName);

var messageFactory = {};
messageFactory.makeMSG = function(string){
    var data = {};
    data.msg = string;
    return data;
}

function postMessage(){
    var str = document.getElementById("msg").value;
    var data = messageFactory.makeMSG(str);
    socket.emit('msg',data);
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                         Math.floor(255 - 42.5 * j) + ', 0)';
        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }