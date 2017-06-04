function sumFibs(num) {
  var arr = [],
  a = 1, b =1, sum = 0;
  arr.push(a);
  while (sum <= num) {
    arr.push(b);
    sum = a + b;
    a = b;
    b = sum;
    
  }
  return arr
    .filter(function(val){
    return val % 2;
  })
    .reduce(function(sum, item){
    
    return sum + item;
  },0);
}

sumFibs(1000);