function ArrayFun() {
    var hundredNums = new Array(100);
    for (var i = 0; i < hundredNums.length; i++) {
        hundredNums[i] = Math.random();
    }
    console.log(hundredNums.join(" , ")) ;
}
ArrayFun()