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
        var point={};
        point.color = getColor();
        if(point.color=="green"){
            point.color="rgb(0,255,0)";
        }else if (point.color=="orange"){
            point.color="rgb(255,94,19)";
        }else if (point.color == "purple"){
            point.color="rgb(255,0,255)";
        }
        point.x = e.offsetX;
        point.y = e.offsetY;
        drawingInstructions.push(point);
        makeMark(point);
    }
  }
  document.getElementById("canvas").onmouseup = function(e){
      isDrawing = false;
      socket.emit('shape',drawingInstructions);
      drawingInstructions = [];
  }

  function makeMark(point){
    var color = point.color;
    var radius = 10;
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
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