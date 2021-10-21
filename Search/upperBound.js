// Finding upper bound in an array
function upperBound(arr1, num) {
    let lo = 0;
    let hi = arr1.length -1
        while((hi - lo) > 1) {
          let mid = Math.floor((lo + hi)/ 2)
          if(arr1[mid] <= num) {
            lo = mid + 1
          } else {
            hi = mid
          }
        }
        if(arr1[lo]> num) {
            return lo;
        }
        if (arr1[hi] > num) {
          return hi
        }
        // if(num > arr1[hi]) {
        //   return arr1.length
        // }
        return -1
  }
  let hb = upperBound([2,3,4,6,7,8], 5);
  console.log(hb); // 4




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


// console.log(
// solve([ 23, 36, 58, 59 ], 
//   [ 3, 207, 62, 654, 939, 680, 760 ]))