module.exports.CardTable = class CardTable{
    constructor(){
        this.decks=[];
        this.cards=[];
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
    makeClientData(){
        var data = {};
        data.decks = this.decks;
        data.cards = this.cards;
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