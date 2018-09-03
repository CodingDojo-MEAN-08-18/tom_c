Debugging TS – Tom Compton

1. var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// myString is a string and cannot be a number - TWC
myString = "9";

2. function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// 9 isn't a string so it has to be converted - TWC
const num = 9;
console.log(sayHello(num.toString()));

3. function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
};
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// Pass an empty string for middle name - TWC
// console.log(fullName("Jimbo", "Jones", ""));

4. interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
// belt should be "belts" - TWC
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

5. class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
// Add “new” and name parameters - TWC
const shane = new Ninja("Alan", "Turing");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
// Use the now working instance of “shane” - TWC
console.log(study(shane));

6. var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
// Remove curly brackets - TWC
console.log(square(4));
// This is not working:
// Put parameters in brackets - TWC
var multiply = (x, y) => x * y;
// Nor is this working:
// Use curly brackets for anonymous function - TWC
var math = (x, y) => {
    const sum = x + y;
    const product = x * y;
    const difference = Math.abs(x - y);
    return [sum, product, difference];
};

7. class Elephant {
   constructor(public age: number){}
// Arrow function adds before returning age - TWC
   birthday = (age) => ++age;
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

