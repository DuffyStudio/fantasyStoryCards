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
  var lastPos = {};
  lastPos.x= null;
  lastPos.y= null;
  document.getElementById("canvas").onmousedown = function(e){
    isDrawing = true;
  }
  document.getElementById("canvas").onmousemove = function(e){
      if(isDrawing){
        var mark={};
        mark.color = getColor();
        if(mark.color=="green"){
            mark.color="rgb(0,255,0)";
        }else if (mark.color=="orange"){
            mark.color="rgb(255,94,19)";
        }else if (mark.color == "purple"){
            mark.color="rgb(255,0,255)";
        }
        mark.x = e.offsetX;
        mark.y = e.offsetY;
        if(lastPos.x != null){
            mark.line = true;
            mark.lastX = lastPos.x;
            mark.lastY = lastPos.y;
        } else{
            mark.line = false;
        }
        lastPos.x = e.offsetX;
        lastPos.y = e.offsetY;
        drawingInstructions.push(mark);
        makeMark(mark);
    }
  }
  document.getElementById("canvas").onmouseup = function(e){
      isDrawing = false;
      socket.emit('shape',drawingInstructions);
      drawingInstructions = [];
      lastPos.x = null;
      lastPos.y = null;
  }

  function makeMark(mark){
    var color = mark.color;
    var radius = 10;
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.beginPath();
    if(mark.line){
        ctx.lineWidth = radius*2;
        ctx.lineCap = "round"; 
        ctx.moveTo(mark.lastX, mark.lastY); 
        ctx.lineTo(mark.x, mark.y);  
        ctx.strokeStyle = color; 
        ctx.stroke();
    }else{
        ctx.arc(mark.x, mark.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
    }
  }

  function getColor() { 
    var ele = document.getElementsByName('color'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked){
          return(ele[i].value);
        } 
    } 
  }   
  function highlightRadio(){
    var ele = document.getElementsByName('color');
    var control = document.getElementsByClassName('radioControl');
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked){
          control[i].classList.add("radioHighlight");
        } else{
          control[i].classList.remove("radioHighlight")
        }
    } 
  }
  function addRadioListeners(){
    var ele = document.getElementsByName('color'); 
    for(i = 0; i < ele.length; i++) { 
      ele[i].addEventListener('change', highlightRadio);
    }
  }
  addRadioListeners();