// Problem One
function findDiff(A) {
  let even = [];
  let odd = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      even.push(A[i]);
    } else {
      odd.push(A[i]);
    }
  }
  console.log(odd);
  even = even.sort((a, b) => a - b);
  odd = odd.sort((a, b) => a - b);

  console.log(even);
  console.log(odd, odd[0]);

  let result = even[even.length - 1] - odd[0];
  return result;
}
// console.log(findDiff([74, 9, 51, 51, 75, 0, 35, 89, 96, 77]));

// Problem 2
function findGreatest(arr) {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if(arr[i] > max2) {
        max2 = arr[i]
    }
  }
   let res = [max2,max1]
  console.log(res);
for(let i = 0; i < res.length; i++) {
    let idx = arr.indexOf(res[i])
    console.log(idx)
    arr.splice(idx,1)
}
console.log(arr);
return arr
}

// function helperFunc(index, arr) {
//     console.log(index);
//     let finalArr = []
//         for(let i = 0; i < index.length; i++) {
//             let idx = arr.indexOf(index[i])
//             console.log(idx)
//             arr.splice(idx,1)
//         }
//         return arr;
// }
// console.log(
//     findGreatest( [1,2,3,4,5])
//         )


function findSmallerAndGreater(arr){
    let sortedArray = arr.sort((a,b) => a-b); //logn
    let minValue = sortedArray[0];
    let maxValue = sortedArray[sortedArray.length-1];
    console.log(minValue, maxValue);
    let filteredArray = arr.filter(item => (item != minValue && item != maxValue)) 
    // let filteredFruits = fruits.filter( item => (item != 10 && item != 967));
    // let numberArr = [minValue, maxValue];
    // for(let i =0;i<numberArr.length; i++) {
    //     let isIdxFound = arr.indexOf(numberArr[i])
    //     arr.splice(isIdxFound,1)
    // }
    // console.log(filteredArray);
    console.log(filteredArray.length);
}

function filterNumberFor(arr) {
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY

    for(i=0; i<arr.length; i++) {
            min = Math.min(min, arr[i])
            max = Math.max(max, arr[i])
    }

    let ans = 0
    for(i=0; i<arr.length; i++) {
        if(arr[i]> min && arr[i]< max) {
            ans++
        }
    }

    console.log(min,max, ans)


}

let arr = [
    947, 871, 859, 471, 763, 766, 379, 746, 485, 966, 10, 350, 341, 22, 706, 702, 717, 967, 641, 712, 10, 954, 751, 250, 
    777, 214, 820, 276, 708, 509, 123, 73, 593, 790, 797, 678, 320, 865, 392, 428, 611, 813, 655, 195, 102, 902, 919, 171, 
    706, 841, 873, 98, 128, 728, 878, 701, 874, 158, 548, 214, 414, 600, 869, 936, 841, 221, 87, 255, 233, 627, 487, 53, 270, 
    162, 517, 576, 240, 681, 172, 148, 86, 778, 205, 741, 483, 11, 795, 188, 450
]
// findSmallerAndGreater(arr)
filterNumberFor(arr)

// findSmallerAndGreater([1,1,1,2,2,5,5,6,6,7,7,8]) // 8

function printPattern(A) {
  let patternArr = []
  for(let row = 0; row< A; row++) {
    let temp = []
    let num = 1
      let col = 0
    for( ; col<=row; col++) {
          temp.push(num);
          num++ 
          // console.log(col)    // 1 1 
    }

    console.log('COL', col, A);

    for(; col<A; col++) {
      console.log('INSIDE', col);
      temp.push(0)           // 1 0 0 
                            
    }

    patternArr.push(temp);
  }
  console.log(patternArr)

}
// console.log(
// printPattern(3))


// day 2 problems

function day2Prob(arr) {
  let xor = arr[0]
  for(let i=1;i<arr.length;i++){
    xor = xor ^ arr[i];
  }

  console.log(xor)
 
}

function convertIntToDec(num){
  let binNum = (num >>> 0).toString(2).split('')
  // let numArr = binNum.split('');
  console.log(binNum);
  let cnt = 0;
  for(let i=0;i<numArr.length;i++) {
      if(Number(numArr[i]) == 1) {
        cnt++
      }
  }
  console.log(cnt)
} 

// day2Prob([1, 2, 2, 3, 1]);

// convertIntToDec(11)

function addBinary(A,B){
  console.log(A,B);
  let i = A.length -1;
  let j = B.length - 1;
  let c = 0;
  let str = ''
  let ans = ''
  while(i>= 0 || j >=0) {
    let sum = c;
    console.log('A', c);
      let number = Number(A[i]) + Number(B[j]) + c;
      if(i>=0) {
        sum += A[i] - '0'
        console.log("RES", sum)
      }

      if(j>=0) {
        sum += B[j] - '0'
      }
      c = sum>1?1:0;
      ans += (sum % 2).toString();
      i--;
      j--;
    }
    if(c) ans += '1'
    console.log(ans.split('').reverse().join(''), typeof ans);
    return ans.split('').reverse().join('')
}

// addBinary('1010', '1011')
// addBinary('11', '1')




// 
function revStr(str) {
  let revStr = ''
  let arrFromStr = str.split('');
  // console.log(arrFromStr)
    for( let el of arrFromStr) {
      // console.log(el);
        revStr = el + revStr
    }
    console.log(revStr)
}

revStr('dlrow olleh')

function countSetBits(num) {

  let x = 0;
  console.log(num);
  while((1 << x) <= num) {
    x++;
  }
    x = x-1;

    if(num == 0) return 0;

  let bTillX = x * (1 << x-1);
  let msbX = num - (1 << x) + 1;
  let rest = num - (1 << x)
  console.log(rest);
  let ans = bTillX + msbX + countSetBits(rest);

  return ans;
}


/// Remove duplicates
let rArr = [121,322,1233,2312,82,146,82,2312,7865,766,75,654]

function removeDuplicates(A) {
    A.sort((a,b) => a-b)

    let n = A.length
    let j = 0
    for(let i =0; i<n-1; i++) {
        if(A[i] != A[i+1]) {
            A[j++] = A[i]
        }
    }
    A[j++] = A[n-1]
    console.log(A)
    return j
}


// let nn = removeDuplicates(rArr)
// console.log('NNN',nn)

// for(let i =0; i<nn; i++) {
//     console.log(rArr[i] + " ")
// }
// console.log(
//   countSetBits(11)
//   )



// let arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ]

// let invalidEntries = 0

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true
//   }
//   invalidEntries++
//   return false;
// }

// let arrByID = arr.filter(filterByID)



function numOfOccurence(arr, k, start, end){
  if(start > end) return 0;
  let mid = Math.floor((start+end) / 2);
  if(arr[mid] < k) return numOfOccurence(arr,k, mid+1, end)
  if(arr[mid] > k) return numOfOccurence(arr,k, start, mid-1)
  return numOfOccurence(arr,k, start, mid-1) + 1 + numOfOccurence(arr,k,mid+1, end);
}

let arr1 = [1,2,3,3,3,3,4,5]
console.log(

  numOfOccurence(arr1, 3, 0, arr1.length-1)
  )

  // function numOcc(arr)


function findGreatest(arr) {

  let maxNumber = Number.MIN_VALUE;
  console.log(maxNumber, Number.MIN_VALUE);
  for(let i = 0; i< arr.length; i++) {
      if(arr[i] > maxNumber) {
          maxNumber = arr[i]
      }
  }
  console.log(maxNumber)
  return maxNumber;
}



// findGreatest([2,3,4,54,65,4,3,43])

function sortLast(arr){

  for(let i = arr.length -1 ; i > 0 ; i--) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i-1];
      arr[i-1] = arr[i];
      arr[i] = temp; 
    } else {
      break;
    }
  }
  console.log(arr)
}


// sortLast([3,5,6,7,11,13,19,20,6])


// Reverse entire array without using extra 




let name1 = 'John'
if(true) {
  let greet = 'Hello'
  function sayHi() {
    console.log(greet, name1)
  }
}

