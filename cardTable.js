module.exports.CardTable = class CardTable{
    constructor(){
        this.decks=[];
        this.cards=[];
        this.d1 = 6;
        this.d2 = 6;
    }
    removeCard(index){
        this.cards.splice(index,1);
    }
    removeDeck(index){
        this.decks.splice(index,1);
    }
    addCard(card,type){
        this.cards.push(new CardPos(card,type));
    }
    rollDice(){
        this.d1 = 1+(Math.floor(Math.random()*6));
        this.d2 = 1+(Math.floor(Math.random()*6));
    }
    makeClientData(){
        var data = {};
        data.decks = this.decks;
        data.cards = this.cards;
        data.d1 = this.d1;
        data.d2 = this.d2;
        return data;
    }
    moveCard(index,x,y){
        this.cards[index].move(x,y);
    }
}
class CardPos{
    constructor(card,type){
        this.x=0.5;
        this.y=0.5;
        this.type=type;
        this.card = card;
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
}