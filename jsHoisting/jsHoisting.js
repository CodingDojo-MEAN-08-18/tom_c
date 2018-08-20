JS Hoisting -- Tom Compton

// 1 ---- Given
// console.log(hello);                                   
// var hello = 'world';  
var hello;
console.log(hello); // logs undefined
hello = 'world';

// 2 ---- Given
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
//	console.log(needle);
// }
var needle = 'haystack';
function test() {
  var needle = 'magnet';
  console.log(needle);     // logs 'magnet'
}

// 3 ---- Given
// var brendan = 'super cool';
// function print(){
//	    brendan = 'only okay';
//  	console.log(brendan);
// }
// console.log(brendan);
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);    // doesn't run. function not called
}
console.log(brendan)   // logs 'super cool'

// 4 ---- Given
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//  	food = 'half-chicken';
//  	console.log(food);
//  	var food = 'gone';
// }
var food = 'chicken';
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);       // logs when called below
    food = 'gone';
}
console.log(food);    // logs 'chicken'
eat();     // logs 'half-chicken' from inside function

// 5 ---- Given
// mean();
// console.log(food);
// var mean = function() {
//  	food = "chicken";
//  	console.log(food);
//  	var food = "fish";
//  	console.log(food);
// }
// console.log(food);
var mean;
mean();         // logs not a function. crashes code
console.log(food);  // doesn't run... would say not defined
function() {
    var food;
    food = 'chicken';
    console.log(food);     // doesn't run
    food = 'fish';
    console.log(food);     // doesn't run
}
console.log(food);  // doesn't run... would say not defined

// 6 ---- Given
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//  	genre = "rock";
//  	console.log(genre);
//  	var genre = "r&b";
//  	console.log(genre);
// }
// console.log(genre);
var genre;
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre);   // logs when called below
    genre = 'r&b';
    console.log(genre);   // logs when called below
}
console.log(genre);   // logs undefined
rewind();             // logs 'rock' then logs 'r&b'
console.log(genre):   // logs 'disco'

// 7 ---- Given
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//  	dojo = "seattle";
//  	console.log(dojo);
//  	var dojo = "burbank";
//  	console.log(dojo);
// }
// console.log(dojo);
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
dojo = 'san jose'
console.log(dojo);  // logs 'san jose'
learn();     // logs 'seattle' then 'burbank'
console.log(dojo);  // logs 'san jose'

// 8 ---- Given
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//}
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;          // crashes code assigning value to constant
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));  // doesn't run
console.log(makeDojo("Berkeley", 0));  // doesn't run