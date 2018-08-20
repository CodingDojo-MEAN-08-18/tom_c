// Fib + Nacci -- Tom Compton

function fib() {
    // Some variables here
    var num1 = 0;
    var num2 = 1;
    var num3 = 0;
  
  function nacci() {
    // do something to those variables here
    num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"