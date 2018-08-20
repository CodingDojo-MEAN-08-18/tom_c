// Ninja Class II -- Tom Compton

function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
        return this;
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + speed + ", " + "Strength: " + strength);
        return this;
    }

    this.drinkSake = function() {
        this.health = this.health + 10;
        return this;
    }

    this.punch = function(victim) {
        if (victim instanceof Ninja) {
            victim.health = victim.health - 5;
            console.log(victim.name + " was kicked by " + this.name + " and lost 5 Health!");
        }
        return this;
    }

    this.kick = function(victim) {
        var damage = strength*5;
        if (victim instanceof Ninja) {
            victim.health = victim.health - damage;
            console.log(victim.name + " was punched by " + this.name + " and lost " + damage + " Heatlh!");
        }
        return this;
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();