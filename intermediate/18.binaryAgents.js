
function binaryAgent(str) {
  function cycle8(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 1) switch(i) {
        case 0: sum+=128; break;
        case 1: sum+=64; break;
        case 2: sum+=32; break;
        case 3: sum+=16; break;
        case 4: sum+=8; break;
        case 5: sum+=4; break;
        case 6: sum+=2; break;
        case 7: sum+=1; break;
      }
    }
    return sum;
  }
  return str.split(' ')
  .map(function(val){
    return String.fromCharCode(cycle8(val.split('')));
  })
  .join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");