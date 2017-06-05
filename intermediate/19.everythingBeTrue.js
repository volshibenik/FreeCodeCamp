/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  var arr = [];
  arr = collection.filter(function(val){
    return (val[pre]? false :true);
  });
  return arr[0]===undefined;
  
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");