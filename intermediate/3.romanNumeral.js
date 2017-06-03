  /*********Roman Numeral Converter*/

/*Convert the given number into a roman numeral.
it works but looks ugly. Will check it later
*/
function convertToRoman(num) {
    
  var qty = 0,  arr = [];

  if (num >= 1000) {
    qty = Math.floor(num / 1000);
    num = num%1000;
    for (var i =0 ;i < qty; i++) {
      arr.push("M");
    }
  }
  if (num >= 900 && num <1000) {
    arr.push("C");
    arr.push("M");
    num -=900;
  }
  if (num >=500) {
    arr.push("D");
    num = num%500;
  }
  if (num >= 400 && num <500) {
    arr.push("C");
    arr.push("D");
    num -=400;
  }
  if (num >=100) {
    qty = Math.floor(num /100);
    num = num%100;
    for (i = 0; i < qty; i++) {
      arr.push("C");
    }
  }
  if (num >= 90 && num <100) {
    arr.push("X");
    arr.push("C");
    num -=90;
  }
  if (num >= 50) {
    arr.push("L");
    num = num%50;
  }
  if (num >= 40 && num <50) {
    arr.push("X");
    arr.push("L");
    num -=40;
  }
  if (num >=10) {
    qty = Math.floor(num /10);
    num = num%10;
    for (i = 0; i < qty; i++) {
      arr.push("X");
    }
  }
  if (num >= 9 && num <10) {
    arr.push("I");
    arr.push("X");
    num -=9;
  }
  if (num >= 5) {
    arr.push("V");
    num = num%5;
  }
  if (num >= 4 && num <5) {
    arr.push("I");
    arr.push("V");
    num -=4;
  }
  if (num >=1) {

    for (i = 0; i < num; i++) {
      arr.push("I");
    }
  }
 return arr.join('');
}

console.log(convertToRoman(3999));
