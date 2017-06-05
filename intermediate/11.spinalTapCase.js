function spinalCase(str) {
//(?=)  positive lookahead - matches location before regex;
 // var splitter =/(?=[A-Z][^A-Z])/g;
  // ' '&'_' -> '',but make next letter capital 
  // capital to small and insert '-' if there is smth before 
  var reg1 = /([a-z])([A-Z])/g;  
  
  function replace1 (match, p1,p2) {
    return p1 +'-'+p2;   //  insert  '-' between [a-z] & [A-Z]
  }
  
  str = str.replace(reg1, replace1);
  
    
  var reg2 = /[\s_]([A-z])/g;
  function replace2 (match, p1) {
    return '-'+p1;  // finds '_'||' ' before a letter and inserts '-' instead
  }
  return str.replace(reg2, replace2).toLowerCase();
}


spinalCase("thisIsSpinalTap");


//https://www.youtube.com/watch?v=EkluES9Rvak&list=PLsj6K4DhrQMQ-wA9ynlhqJyJY8scciEgk&index=10&spfreload=5   Lea Verou