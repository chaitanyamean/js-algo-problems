

function bubbleSort(arr) {
    let isSorted = false
    let counter = 0
    while(!isSorted) {
        isSorted = true
        for (let i = 0; i < arr.length -1 - counter; i++) {
            if (arr[i] > arr[i+1]) {
                const temp;
                temp = arr[i+1]
                arr[i+ 1] = arr[i]
                arr[i] = temp
                isSorted = false                 
            }
        }
        counter += 1
    }
    return arr
}
console.log(bubbleSort([2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4, 4, 8, 5, 1, 5, 0, 0, 2, -10]))