class Bike{
    miles: number;
    constructor(
        public price: number,
        public max_speed: string){
        this.miles = 0; 
        }
    display_info() {
        console.log(`Your bike's price is ${this.price} dollars. The maximum speed is ${this.max_speed} with ${this.miles} miles on it`);
    }
    ride() {
        console.log('Riding');
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log('Reversing');
    // Prevent negative miles.
        if (this.miles > 4) {
            this.miles -= 5;
        }
        return this;
    }
}

var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(225, "35mph");
var bike3 = new Bike(250, "40mph");

bike1.ride().ride().ride().reverse().display_info();
bike2.ride().ride().reverse().reverse().display_info();
bike3.reverse().reverse().reverse().display_info();
