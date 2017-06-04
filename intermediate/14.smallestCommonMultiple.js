function smallestCommons(arr) {
  var start = arr[0], end = arr[1];
  if (start > end){ end = start; start = arr[1];}
  n = end;
  while (n<5e20){  //not to break browser if someone would put some weird array 
    for (var i = 1; i <= end-start; i++ ){
      if (n % (end-i) === 0) {
        if (i == end-start) {return n;}
        continue;
      }
      break;
    }
    n+=end;
  }
  
}


smallestCommons([1,13]);