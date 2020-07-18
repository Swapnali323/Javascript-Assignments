function prime(){
           
    var count = 0;
    var arr = [];

    for(let i=2; i<1000 ; i++){
        count = 0;
        for(let j=2 ; j<i ; j++){
            if( i%j == 0){
                count++;
            }
        }
        if( count == 0)
            arr.push(i);
    }

    console.log(arr) ;
}
    
 prime();