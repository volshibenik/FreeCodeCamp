function dropElements(arr, func) {
  // Drop them elements.
  
  var elem = arr.find(func);
  if (!elem) return [];
  var num = arr.indexOf(elem);
  
  return arr.splice(num);
}

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});