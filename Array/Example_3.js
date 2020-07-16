function numberArray(stringArray) {
    var nums = new Array(stringArray.length);
    for (var i = 0; i < stringArray.length; i++) {
        nums[i] = parseFloat(stringArray[i]);
    }
    return (nums);
}

function arrayFun() {
    var strings = ["1.2", "2.3", "3.4"];
    var nums = numberArray(strings);
    console.log(nums) ;
}
arrayFun()