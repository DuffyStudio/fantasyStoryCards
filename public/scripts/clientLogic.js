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