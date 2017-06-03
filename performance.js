function bench (f) {
    var startTime = new Date();
    for (var i = 0; i < 1000; i++) f(param);
    return new Date() - startTime;
}



// usage: do multiple tests with next:

var timeIn = 0;
var timeOut = 0;
for (var i=0; i < 100; i++) {
    timeIn += bench(func1); 
    timeOut += bench(func2);
}
console.log(timeIn + " ms");
console.log(timeOut + " ms");