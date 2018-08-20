// Math module - Tom Compton

module.exports = function (){
    return {
        add: function(num1, num2) { 
            // add code here
            console.log(`${num1} plus ${num2} = ` + (num1+num2));
        },
        multiply: function(num1, num2) {
            // add code here 
            console.log(`${num1} times ${num2} = ` + (num1*num2));
        },
        square: function(num) {
            // add code here 
            console.log(`${num} squared is ` + (num*num));
        },
        random: function(num1, num2) {
            // add code here
            console.log(`A random number between ${num1} and ${num2} is ` + (Math.floor(Math.random() * (num2 - num1)) + num1));
        }
    }
};