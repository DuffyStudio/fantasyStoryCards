module.exports.Game = class Game{
    constructor(){
        this.players=[];
    }
    addPlayer(p){
        this.players.push(p);
    }
    update(){
        for(var player of this.players){
            player.update();
        }
    }
}

