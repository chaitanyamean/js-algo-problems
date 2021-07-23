// Checking 2 objects deep
function checkDeepObj(a,b) {
    // if(Number.isNaN(a))
    

    if(Number.isNaN(a) && Number.isNaN(b)) {
        return true
    }

    if( typeof a !== typeof b ) {
        return false
    }

    if( typeof a !== 'object' || a === null || b === null) {
        return a === b
    }

    if(Object.keys(a).length !== Object.keys(b).length) {
        return false
    }

    for(const key in a) {
        // console.log(checkDeepObj(a[key], b[key]))
        if(!checkDeepObj(a[key], b[key])) {
            return false;   
        }
    }

    return true

}

// console.log(checkDeepObj({ a: 123 }, { a: 123 }))
// console.log(checkDeepObj(null, null))
// checkDeepObj('33', '33')
// checkDeepObj('33', 33)

 console.log(checkDeepObj(NaN, NaN)	)
// checkDeepObj(undefined, undefined)
// console.log(checkDeepObj({ a: 123, b: ['abc', 'def', 'ghi'] }, { a: 123, b: ['abc', 'def', 'ghi'] }))

/*
1) if both are objects then we need to check for length
2) if either one is not obj return false
3)  if both types are different return null
4) 

*/



// #Given an array nums of size n, return the majority element.

// #The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// # Example 1:
// # Input: nums = [3,2,3]
// # Output: 3

// # Example 2:
// # Input: nums = [2,2,1,1,1,2,2]
// # Output: 2



// O(n)
function findMajorityNumber(arr) {
            let cache = {}
            for(let item of arr) {
                if(cache[item]) {
                    cache[item] = cache[item] + 1
                } else {
                    cache[item] = 1 
                }
            }
            let value = 0
            let majorityNumber;
        for(let key in cache) {
            if(cache[key] > value) {
                value = cache[key]
                majorityNumber = key
            }
        }
    
    return majorityNumber
    
    }
    
//     let number = findMajorityNumber([2,2,1,1,1,2,2])
//     console.log(number)