# MVC Clicker
This is the implementation for a game called "Spaghetti Cat". The basic
idea is akin to that of "Cookie Clicker", in that you originally start
out clicking on a meme of a cat eating spaghetti, and for each click,
you amass a certain amount of points. Once the player reaches a certain
threshold of points, they are able to level up and get an edgy teen to
do some clicking for them. The teen will then do the clicking for the
player, who at this point, can cease having to click on the icon
repeatedly to get points. From there, the player will only interact with
the console, and as the teen adds to the click count, will also spread
the word to other edgy teens, who will randomly be added to the userbase
queue, and will randomly provide feedback on the meme. The new users
will also work to add to the player's point total.

After a certain amount of teens are added, the player will then be
offered the option to upgrade to a computer, which will improve on the
teen's ability to add to the click total, as well as add other
computers, much like what occurs with the teens. This process will
continue for several more levels, up through Boomers with Facebook
accounts, and supercomputers. Eventually, the player is offered the
ability to utilize the CIA, who, through Soros bucks, will slowly begin
to dequeue other player's clicker objects, as they don't want the meme
becoming too popular. The question at this point will be how do other
players counteract this outcome, as well as how can they improve their
own performance to win the game.


player
    scorable[]
    genLvl1 num 
    timestamp lastactive
    points

object clickable -> points

object repeatable -> points
    number
    cost
    timespan

currTime - lastactive = deltaTime
for each in scorable
    player.points += deltatime/timespan * points

client
    buttons
        -->js functions --> socket
            data = {
                type: 3
            }
            #socket.emit("purchaseGenerator",data)
            data ={
                target: "spaghettiCat"
            }
            #socket.emit("click",data)

purchaseButtonFactory(){}

socket.on("getBaseGAmedata",data){
    
    for each in data.availiblememers
    purchasebuttonfactory.makebutton(data.availiblememers[i]);
}

<button onclick=buymemerlvl1();>buy memer lvl 1</button>
function buymemerlvl1(){
    alert("test lvl1");
}
<button onclick=buymemerlvl1();>buy memer lvl 2</button>
function buymemerlvl1(){
    alert("test lvl1");
}
<button onclick=buymemerlvl1();>buy memer lvl 3</button>
function buymemerlvl1(){
    alert("test lvl1");
}
<button onclick=buymemerlvl1();>buy memer lvl 4</button>
function buymemerlvl1(){
    alert("test lvl1");
}
<button onclick=buymemerlvl1();>buy memer lvl 1</button>
function buymemerlvl1(){
    alert("test lvl1");
}
<button onclick=buymemerlvl1();>buy memer lvl 1</button>
function buymemerlvl1(){
    alert("test lvl1");
}

db stores player objects
