function binarySearch(arr, num, left, right) {
    if(right  >= left) {
        let mid = Math.floor((right+left)/2)

        if(arr[mid] == num) {
            return mid;
        }

        if(arr[mid] > num) {
            return binarySearch(arr, num, left, mid-1);
        }

        return binarySearch(arr, num, mid+1, right)
    }
    return -1
}

let arr = [44,53,66,75,87,98,788,888,999,1000,1111,1222,1344,1455];
let ans = binarySearch(arr, 1222, 0, arr.length-1)
console.log(ans); // 9