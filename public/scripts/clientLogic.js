var points = 0;
function doThing(){
    points ++;
    document.getElementById("points").innerHTML = "points: "+points;
  }
  function loop(){
      doThing();
      setTimeout(loop,100);
  }
  loop();