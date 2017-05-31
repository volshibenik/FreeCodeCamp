/*            Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays,
    but not both. In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  var newArr = [], uniqueIndexArr2 = [],
  k = 0;
  // Same, same; but different.
  for (var i =0 ; i< arr1.length; i++) {
    k = arr2.indexOf(arr1[i]);
    if(k==-1) {
      newArr.push(arr1[i]);
    } else {
      uniqueIndexArr2.push(k);
    }
  }
  
  for (i =0 ; i< arr2.length; i++) {
    if (i != uniqueIndexArr2[0]) {
      newArr.push(arr2[i]);
    } 
    else uniqueIndexArr2.splice(0,1);
  }
  

  return newArr;
}

var a1 = [1, "calf", 3, "piglet"], a2 = [12, "calf", 14, "said", "piglet"];

diffArray(a1,a2);
