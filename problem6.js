
// Count Palindromic Numbers in a Range

function pali(min,max){
    let count =0;
    

    for(let i=min;i<=max;i++){
        let original =i;
        let rev =0;

        while(original > 0){
            let m = original % 10 ;
            rev =( rev * 10) + m;
            original=Math.floor(original / 10);
        }

        if(rev == i){
            count+=1;
            console.log(i);
        }
    }
    console.log(count);
   
}

pali(11,34);

