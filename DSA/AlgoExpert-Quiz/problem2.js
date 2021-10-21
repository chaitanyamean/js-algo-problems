

// Creating an array with new and fill, map, slice

const arr1 = [{name: 'foo'}, {name: 'bar'}, {name: 'baz'}]


const arr2 = new Array(arr1.length).fill({})
console.log(arr2)
arr2.forEach((ele, idx) => {
    ele.name = arr1[idx].name,
    ele.prodIdx = idx
});


const arr3 = arr1.map((ele,idx) => {
    return {

        ...ele,
        prodIdx: idx   
    }
}) 


const arr4 = arr1.slice()
arr4.forEach((ele, idx) => {
    ele.name = arr1[idx].name,
    ele.prodIdx = idx
});


console.log(arr2)
console.log(arr3)
console.log(arr4)



//  [
//     { name: 'baz', prodIdx: 2 },
//     { name: 'baz', prodIdx: 2 },
//     { name: 'baz', prodIdx: 2 }
//   ]
//   [
//     { name: 'foo', prodIdx: 0 },
//     { name: 'bar', prodIdx: 1 },
//     { name: 'baz', prodIdx: 2 }
//   ]
//   [
//     { name: 'foo', prodIdx: 0 },
//     { name: 'bar', prodIdx: 1 },
//     { name: 'baz', prodIdx: 2 }
//   ]