module.exports.StoryCards = class StoryCards{
    constructor(){
        this.weapons=new Deck();
        this.races = new Deck();
        this.locations = new Deck();
        this.backgrounds = new Deck();
        this.monsters = new Deck();
    };
    load(data){
        data.weapons.cards.forEach(card => this.weapons.cards.push(card));
        data.races.cards.forEach(card => this.races.cards.push(card));
        data.locations.cards.forEach(card => this.locations.cards.push(card));
        data.backgrounds.cards.forEach(card => this.backgrounds.cards.push(card));
        data.monsters.cards.forEach(card => this.monsters.cards.push(card));
    }
    addNewCard(data){
        console.log(data);
        var card = new Card(data.name,data.description,data.strength,data.skill,data.magic);
        switch(data.deck){
            case "Location":
                this.locations.addCard(card);
                break;
            case "Monster":
                this.monsters.addCard(card);
                break;
            case "BackGround":
                this.backgrounds.addCard(card);
                break;
            case "Race":
                this.races.addCard(card);
                break;
            case "Item":
                this.weapons.addCard(card);
                break;
        }
    }
    prettyPrint(){
        console.log(this.weapons.cards.length+ " Item Cards:");
        this.weapons.cards.forEach(card => console.log("   " + card.title));
        console.log(this.backgrounds.cards.length +" Background Cards:");
        this.backgrounds.cards.forEach(card => console.log("   " + card.title));
        console.log(this.races.cards.length+" Race Cards:");
        this.races.cards.forEach(card => console.log("   " + card.title));
        console.log(this.locations.cards.length+ " Location Cards:");
        this.locations.cards.forEach(card => console.log("   " + card.title));
        console.log(this.monsters.cards.length+" Monster Cards:");
        this.monsters.cards.forEach(card => console.log("   " + card.title));
    }

}
class Card{
    constructor(title, description, strength, skill, magic){
        this.title = title;
        this.description = description;
        this.strength = strength;
        this.skill = skill;
        this.magic = magic;
    }
}
class Deck{
    constructor(){
        this.cards = [];
    }
    addCard(card){
        this.cards.push(card);
    }
    draw(){
        var index = Math.floor(Math.random()*this.cards.length);
        return this.cards[index];
    }
}
