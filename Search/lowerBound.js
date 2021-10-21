function lower_bound(arr, num) {
    let low = 0;
    let high = arr.length -1;
    while((high-low) > 1) {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] < num) {
            low = mid + 1
        } else {
            high = mid;
        }
    }
    if(arr[low]>= num) {
        return low;
    }
    if (arr[high] >= num) {
      return high
    }
    
    return -1

}
console.log(
    lower_bound([2,3,4,6,7,8], 5)
    )