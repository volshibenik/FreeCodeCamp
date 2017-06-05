  /*******   Caesars Cipher    ******
   
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

        function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  //97-122  65-90
  var arr2 = arr.map(function(val ,index){
    if (arr[index].charCodeAt(0) < 77 && arr[index].charCodeAt(0) > 64) return String.fromCharCode(arr[index].charCodeAt(0)+13);
    else if (arr[index].charCodeAt(0) > 76 && arr[index].charCodeAt(0) < 91)return String.fromCharCode(arr[index].charCodeAt(0)-13);
      return val;
  });
  
  //str2 = str.charCodeAt(0);
  //var str3 = String.fromCharCode(97); 
  return arr2.join('');
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

    