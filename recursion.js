// #### Calculate the sum of natural number up to n
// * Write a JavaScript program to compute the sum of an array of integers

    const array = [1, 2, 3, 4, 5, 6]
  

    let n = 0;
    let i = 0;
    function sum(array) {
      for (let i = 0; i < array.length; i++) {
        n += array[i];
       
      }
       console.log(n);
      }
     
    sum(array); // returns 21


//or this way with reduce method

    function sum1(n) {
        return n.reduce(function(a, b) {
            return a + b;
        });
    };
    
    
    console.log(sum1(array)); //returns 21