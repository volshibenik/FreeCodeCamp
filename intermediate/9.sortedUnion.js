function uniteUnique(arr) {
            var totalArr = [];
            for (var i = 0; i < arguments.length; i++) {
                totalArr = totalArr.concat(arguments[i]);
            }
            kk = totalArr.reduce(function(finalArr, curArr){
                
                    var flat = +curArr;
                
                    if (finalArr.indexOf(flat)==-1) {
                        finalArr.push(curArr);
                    }
                
                return finalArr;
                
            },[]);
            
            return kk;
        }
        
        console.log(uniteUnique([1, 3, 2], [1, [5]], [5, [4]]));