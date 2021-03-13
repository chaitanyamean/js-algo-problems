

// Time complexity O(nlogn)and Space O(1)

function twoSumArray(array, targetSum) {
    array.sort((a,b) => a -b)
    let left = 0;
    let right = array.length - 1
    while(left < right) {
        let currentSum = array[left] + array[right]
        if (currentSum == targetSum) {
            return [array[left], array[right]]
        } else if(currentSum < targetSum) {
            left++
        } else if(currentSum > targetSum) {
            right--
        }
    }
}

twoSumArray([3,2,9,22,90,34,22,88,2], 5)
