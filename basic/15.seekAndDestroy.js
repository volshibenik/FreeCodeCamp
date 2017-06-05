/*
  ******  Seek and Destroy  *****
   
    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
    Remove all elements from the initial array that are of the same value as these arguments.
    
*/

        function destroyer(arr) {
            var argsObj = {}, tempArr = [];
            for (var i =1; i < arguments.length; i++) {
                argsObj[arguments[i]] = true;
            }
            tempArr = arr.filter(function(val){
                if (!(val in argsObj)) return true;
            });
            return tempArr;
        }
        
        console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
