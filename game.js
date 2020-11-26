class Player{
    constructor(){
        this.name = "test";
        this.points = 0;
        this.generators=[];
    }
    update(){
        for(var generator of this.generators){
            generator.update();
        }
    }
}
class Generator{
    constructor(){
        this.timespan=5000;
        this.points=100;
        this.lastTick = null;
    }
    update(){
        var data = {};
        data.scored = 0;
        if (Date.now() - this.lastTick >= this.timespan){
            data.scored = this.points;
            this.lastTick = Date.now();
        }
    }
}
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

