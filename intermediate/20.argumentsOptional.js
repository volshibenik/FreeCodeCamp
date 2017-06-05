/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/

function addTogether() {
  var a = arguments[0];
  var b = arguments[1];
  if (a !== +a) return undefined;
  if (!b) {
    return function(x) {return (x===+x? a+x:undefined);};
  }
  if (b !== +b) return undefined;
  return a + b;
}
//definitely, need to inmprove this solution
console.log(addTogether(2)([3]));