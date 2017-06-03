function convertHTML(str) {
  // &colon;&rpar; &amp;  &apos;  &lt; &gt; &quot;
  function replacer(x) {
    switch(x) {
      case '&': x = '&amp;'; break;
      case '<': x = '&lt;'; break;
      case '>': x = '&gt;'; break;
      case '\'': x = '&apos;'; break;
      case '"': x = '&quot;'; break;
    }
    return x;
  }
//  var res = str.replace(/blue|house|car/gi, function myFunction(x){return x.toUpperCase();});
  
var newString = str.replace(/&|<|>|"|'/g, replacer);
  return newString;
}

convertHTML('Stuff in "quotation marks"');