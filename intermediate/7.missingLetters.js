/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  var arr = str.split('');
  for (var i = 0; i < arr.length-1; i++) {
    if ( (arr[i+1].charCodeAt(0)-arr[i].charCodeAt(0)) != 1) {
      return String.fromCharCode(arr[i].charCodeAt(0)+1);
    }
  }
  return undefined;
}

fearNotLetter("abce");