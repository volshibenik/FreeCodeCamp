/*     Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array 
of all objects that have matching property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection if it is to be included in the returned array.*/


function whatIsInAName(collection, source) {

  var arr = [], arr2 = [], var newArr = [];

  arr = Object.keys(source);
  for (var k in source) {
    arr2.push(source[k]);
  }
  
  newArr = collection.filter(function(val, elem, array){
    for (var i =0; i < arr.length; i++) {
        var kk = array[elem][arr[i]];
      if (arr[i] in array[elem]) {
        if (kk == arr2[i]) {
          if (i==arr.length - 1) {
            return true;
          }
        } else return false; //this needed in case below,  where there is "b", but with different value (2 instead 1)
      } else return false;  
    }
    return false;
  });
  // Only change code above this line
  return newArr;
}

console.log(whatIsInAName([{ "c": 2, "b": 1 }, { "b": 1 }, { "a": 1, "b": 2, "c": 2 }], { "b": 1, "c": 2 }));