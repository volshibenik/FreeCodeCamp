/*    PIG LATIN
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
  var vowels = {
    a:true,
    e:true,
    i:true,
    o:true, 
    u:true,
    y:true
  };
  var arr = str.split('');
  var i =0;
  while (!(arr[i] in vowels)) {
    i++;
  }
  if (i !== 0) {
    var k = arr.slice(0,i).join('');
    arr.splice(0,i);
    arr.push(k+"ay");
  } else arr.push("way");
  
  return arr.join('');
}

translatePigLatin("glove");
