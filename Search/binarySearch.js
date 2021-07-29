function binarySearch(arr, num, l, r) {
    if(r  >= l) {
        let mid = l+Math.floor((r-l)/2)

        if(arr[mid] == num) {
            return mid;
        }

        if(arr[mid] > num) {
            return binarySearch(arr, num, l, mid-1);
        }

        return binarySearch(arr, num, mid+1, r)
    }

    return -1
}

let arr = [44,53,66,75,87,98,788,888,999,1000,1111,1222,1344,1455];
let ans = binarySearch(arr, 1000, 0, arr.length-1)
console.log(ans);
// arr, num , l r 
// while r - l > 0