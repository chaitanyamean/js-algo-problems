const binarySearch = (arr,x) => {
    let l = 0
     let r = arr.length -1 
     while(l<=r) {
        let m = Math.floor((l+r) / 2)
         if (x < arr[m]) {
             r = m - 1
         } 
         if (x > arr[m]) {
             l = m + 1
         }
         if(x == arr[m]) {
             return m
         }
     }
 
     return -1
 
 }
 
 const arr = [10,20,30,40,50]
 console.log(binarySearch(arr, 520))