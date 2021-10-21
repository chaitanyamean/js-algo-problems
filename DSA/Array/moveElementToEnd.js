

// Moving given element to end in an array

// Time complexity O(n)  space complexity O(1)


function moveEleToEnd(arr, toMove) {
    let left = 0;
    let right = arr.length - 1
    while(left < right) {
        while (left<right && arr[right] == toMove) {
            right--
        }
        if(arr[left] == toMove) {
            let temp = arr[right]
            arr[right] = arr[left]
            arr[left] = temp
        }
        left++
    }
    return arr
}

moveEleToEnd([2,1,4,2,2,2,5,4,2], 2)




