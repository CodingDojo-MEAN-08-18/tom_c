// JS Library - Tom Compton

var _ = {
    map: function(arr, callback) {
      //code here:
      for (let index=0; index < arr.length; index++) {
          arr[index] = callback(arr[index]);
      }
    },
    reduce: function(arr, callback, memo) { 
      // code here;
      let element = 0;
      if (!memo) {
          memo = arr[0];
          element = 1;
      }
      for (let index = element; index < arr.length; index++) {
          memo = callback(arr[index], memo);
      }
      return memo;
    
    },
    find: function(arr, callback) {   
      // code here;
      for (let index=0; index < arr.length; index++) {
          if (callback(arr[index])) {
              return arr[index];
          }
      }
    },
    filter: function(arr, callback) { 
      // code here;
      var temp = [];
      for (let index=0; index < arr.length; index++) {
          if (callback(arr[index])) {
              temp.push(arr[index]);
          }
      }
      return temp;
    },
    reject: function(arr, callback) { 
      // code here;
      var temp = [];
      for (let index=0; index < arr.length; index++) {
        if (!callback(arr[index])) {
            temp.push(arr[index]);
        }
      }
      return temp;
    }
  }
 // you just created a library with 5 methods!

const myArray = [7, 8, 9, 10];
_.map(myArray, function callback(x) { return x * 3; });
console.log(myArray);
console.log(_.reduce(myArray, function callback(x, memo) { return x + memo; }));
console.log(myArray);
_.find(myArray, function(num){ return num % 2 == 0; });
console.log(_.find(myArray, function(num){ return num % 2 == 0; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.filter(myArray, function(num){ return num % 4 == 0; }))
console.log(_.reject(myArray, function(num){ return num % 2 == 0; }))