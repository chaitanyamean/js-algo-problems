function sum(x,y,z) {
    return x+y+z
}
let numbers = [1,2,3]

// console.log(sum(...numbers))

// console.log(sum.apply(null, numbers))


let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

// console.log(numberStore)


function myFunction(v, w, x, y, z) { 
    console.log(v,w,x,y,z)
}
let args = [0, 1];
console.log(myFunction(-1, ...args, 2, ...[3]))
