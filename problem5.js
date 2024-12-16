
// Problem: We want to find the largest palindrome number within a given range.

function pali(min,max){
    let largest =0;

    for( let i=min;i<=max;i++){
        let orijinal =i;
        let rev =0;
      
     
    
        while(orijinal > 0){
            let m=orijinal %10;
            rev = (rev *10)+m;
            orijinal = Math.floor(orijinal /10);
        }

        if(rev== i){
            if(rev > largest){
                largest=rev;
            }
        }
    }
    console.log(largest);
  
}

pali(11,34);
