function steamrollArray(arr) {
  // I'm a steamroller, baby
  
    function flatten (arr) {
        return arr.reduce(function(accum, item) {
            
            if (Array.isArray(item)) return accum.concat(flatten(item));
            return  accum.concat(item);
            
            /*return accum.concat(Array.isArray(item)? flatten(item) : item)  better code from MDN*/
        },[]);
    }
    
  return flatten(arr);
  
}

console.log(steamrollArray([0,[2, 3,4, [[5],2]], [1 ], 2]));

