function square( value ){
   return value*value;
        }

var result = [];
    function map( array , funct ){
           
if( array.length === 1){
    return funct(array);
    }
else{
    return [funct(array[0])].concat(map( array.slice(1) , funct ));
        }
    }
var array = [1 , 2 , 3 , 4 , 5];
var result = map( array , square);
console.log(result);
