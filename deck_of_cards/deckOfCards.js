// Deck of Cards - Tom Compton

class Card {
    constructor(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
    
    show() {
        console.log(`This card is a ${this.name} of ${this.suit} with a value of ${this.value}`);
        return this;
    }
    }
    
    class Deck {
    constructor() {
        this.deck = []
    }
    
    build() {
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        for (const suit of suits) {
            for (const [index, name] of names.entries()) {
                const val = index + 1;
                const card = new Card(name, suit, val)
                this.deck.push(card);
            }
        }
        return this;
    }
    
    shuffle() {
        var m = this.deck.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }
    
    deal() {
        return this.deck.pop();
    }
    }
    
    class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    
    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    
    discard() {
        this.hand.pop();
        return this;
    }
    }
    
    const deck1 = new Deck();
    deck1.build().shuffle();
    console.log(deck1);
    
    const player = new Player("Abe Vigoda");
    player.draw(deck1).draw(deck1).draw(deck1);
    for (const card of player.hand) {
        console.log(card.show());
    }
    console.log(player);
    console.log(deck1);