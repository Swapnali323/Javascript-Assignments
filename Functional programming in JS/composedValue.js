var x;

function square(x) {
    return x*x;    
}
function double(x) {
    return 2*x;
}

function compose(square,double) {
    
    return (x)=> square(double(x))
}

var f1= compose(square,double);
console.log(f1(5));
console.log(f1(10));

var f2= compose(double,square);
console.log(f2(5));
console.log(f2(10));

console.log(f1(f2(5)));