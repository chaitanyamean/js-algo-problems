function higherBound(arr1, num) {

    let lo = 0;
    let hi = arr1.length -1
    console.log(hi,lo)
    console.log('LEN', hi)
        while((hi - lo) > 1) {
          let mid = Math.floor((lo + hi)/ 2)
          console.log(mid);
          if(arr1[mid] <= num) {
            lo = mid + 1
            
          } else {
            hi = mid
          }
        }
  
        console.log(lo, hi)
        if(arr1[lo]> num) {
            return lo;
        }
  
        if (arr1[hi] > num) {
          return hi
        }
        return -1
  
  
  
  }
  
  
  let hb = higherBound([3, 7, 11, 17], 10);
  console.log(hb);




function solve(A, B){
  let arr = []
      for(let i = 1; i< A.length; i++) {
          A[i] = A[i] + A[i-1]
      }  
      
      for(let j = 0; j< B.length; j++) {
                let lo = 0;
            let hi = A.length -1
          while((hi - lo) > 1) {
            let mid = Math.floor((lo + hi)/ 2)
            if(A[mid] <= B[j]) {
              lo = mid + 1
            } else {
              hi = mid
            }
          }
          if(A[lo]> B[j]) {
              arr.push(lo);
          } else if (A[hi] > B[j]) {
            arr.push(hi)
          }

          if(B[j] > A[hi]) {
            arr.push(A.length)
          }
        
          
      }
      
     
        return arr;
      
}


console.log(
solve([ 23, 36, 58, 59 ], 
  [ 3, 207, 62, 654, 939, 680, 760 ]))