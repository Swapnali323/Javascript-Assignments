function compose(){
  console.log(square(double(5)))
}

 
function square(x) { return(x*x); }
function double(x) { return(x*2); }
compose()