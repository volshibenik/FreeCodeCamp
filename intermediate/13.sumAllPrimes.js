function sumPrimes(num) {
  var sum = 0;
  for (var i = 1;i <= num; i++) {
    if (isPrime(i))  sum+=i;
  }
    
  return sum;
  
}
function isPrime(n) {
  if (n==1) return false;
  for (var i = 2; i <= n; i++) {
    if (n%i === 0 && n > i) return false;
  }
  return true;
}

sumPrimes(10);
