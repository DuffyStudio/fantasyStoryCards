
var dragging = false;
function makeDealButton(type){
  var button = document.createElement('button');
  button.type = button;
  button.innerHTML = type.charAt(0).toUpperCase()+type.substr(1)+" Deck";
  button.className = 'carddeck';
  button.id = type+"deck";
  button.onclick = function(){deal(type)};
  document.body.append(button);
}
function makeDice(d1,d2){
  var button = document.createElement('button');
  button.type = button;
  button.innerHTML = d1 +"  "+ d2;
  button.id = "dice";
  button.onclick = function(){rollDice()};
  document.body.append(button);
}

function makeControls(d1,d2){
  makeDealButton('race');
  makeDealButton('location');
  makeDealButton('item');
  makeDealButton('monster');
  makeDealButton('background');
  makeDice(d1,d2);
}
function makeCardGraphics(data,index){
var id=(data.card.title+Math.floor(Date.now()*Math.random()));
var div = document.createElement('div');
div.index = index;
div.id=id;
div.className = 'gameCard';

console.log(data.x*window.innerWidth);
div.style.left = data.x *window.innerWidth +"px";
div.style.top = data.y *window.innerHeight +"px";
div.className +=" "+data.type;

var title = document.createElement('div');
title.className='cardTitle';

title.innerHTML="<b>"+data.type.charAt(0).toUpperCase() + data.type.substr(1) +"</b>: "+data.card.title;
div.append(title);
  
var image = document.createElement('div');
image.className='cardImage';
image.innerHTML=data.card.description;
div.append(image);
  
var content = document.createElement('div');
content.className='cardContent';
var contentString = "Strength: "+data.card.strength + "</br>Skill: "+data.card.skill+"</br>Magic: "+data.card.magic;
content.innerHTML=contentString;


div.append(content);
  
div.addEventListener('mousedown',function(e){
    e.preventDefault();
    dragging = document.getElementById(id);
});
div.addEventListener('contextmenu',function(e){
  e.preventDefault();
  removeCard(index);
  return false;
});
div.addEventListener('mouseup',function(e){
  var stringLeft = dragging.style.left;
  var x = parseInt(stringLeft.slice(0,-2),10);
  var stringTop = dragging.style.top;
  var y = parseInt(stringTop.slice(0,-2),10);

  moveCard(dragging.index,x/window.innerWidth,y/window.innerHeight);
  dragging = false;
    
});
document.body.appendChild(div);
}

document.addEventListener('mousemove',function(e){
 if(dragging != false){
     dragging.style.left = (e.pageX-100)+"px";
     dragging.style.top = (e.pageY-150)+"px";
 }
});
