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
  var isDrawing = false;
  var drawingInstructions = [];
  document.getElementById("canvas").onmousedown = function(e){
    isDrawing = true;
  }
  document.getElementById("canvas").onmousemove = function(e){
      if(isDrawing){
        var pos={};
        pos.x = e.offsetX;
        pos.y = e.offsetY;
        drawingInstructions.push(pos);
        makeMark(pos);
    }
  }
  document.getElementById("canvas").onmouseup = function(e){
      isDrawing = false;
      socket.emit('shape',drawingInstructions);
      drawingInstructions = [];
  }

  function makeMark(pos){
    var color = 'green';
    var radius = 10;
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
  }