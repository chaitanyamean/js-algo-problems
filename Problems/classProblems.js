

// Sub arrays

function subArr(arr) {

}



// arr []


function rotateArray(arr,k) {
    let arrayObj=[
        {a:12},
        {y:5},
        {z:8},
        {d:9}
        ];

        let finalArr = arrayObj.sort()
}


// rotateArray([9,2,3,4,5,6], 1)


function minMax(A){

    let min = Math.min(A[0], A[1])
    let max = Math.max(A[0], A[1])
    let N = A.length -1;
        for(let i = 2; i<A.length; i++) {
            if(min > A[i]) {
                min = A[i]
            } else if(max < A[i]) {
                max = A[i]
            }
        }

        let ans = N;
        let minInd = -1
        let maxInd = -1

        if(min === max) return 1;

        for(let i = N-1; i>=0; i--) {
            console.log(i)
            if(A[i] == min) {
                minInd = i
                if(maxInd != -1) {
                    ans = Math.min(ans, maxInd-minInd+1)
                }
            } else if (A[i] == max) {
                maxInd = i
                if(minInd != -1) {
                    ans = Math.min(ans, minInd-maxInd+1)
                }
            }
        }
        console.log('aaa',ans)
     

    console.log(min,max);
}


// sub([3,4,1,7,8,9,9,5])
minMax([814, 761, 697, 483, 981])