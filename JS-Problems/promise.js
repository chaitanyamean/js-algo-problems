// function makeReq(location) {
//     return new Promise ((resolve, reject) => {
//         console.log('Making response', location)
//         if(location === 'Google') {
//             resolve('Google say hi')
//         } else {
//             reject('we can only talk to google')
//         }
//     })
// }
let key = 'success';
// function processReqest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('processing')
//         resolve('Extra Information' + response)
//     })
// }

// makeReq('Google').then(response => {
// console.log('Res recieved')
// return processReqest(response)
// }).then(processedRes => {
//     console.log('23 line', processedRes);
// }).catch(err => {
//     console.log(err)
// })


// async function doWork() {
//     try {
//         const response = await makeReq('Google')
//         console.log('response recieved', response)
//         const processResponse =  await processReqest(response)
//         console.log(processResponse)
//     } catch(err) {
//         console.log('error',err)
//     }
// }

// doWork()




function printName() {
    console.log(this.key)
}

// let obj1= {
//     name: 'krishna'
// }

// // printName.call(obj1)
var name1 = 'krishnaa';
const printName1 = () => {
    console.log(this)
    console.log(this.name1, this.number);
}


let number = 9999999999;
// let pr = printName1.bind(this, obj1)
// console.log(pr())
// printName1()

var obj = {
    count : 11,
    doSomethingLater : function(){
        // The traditional function binds "this" to the "obj" context.
        setTimeout( () => {
            // Since the arrow function doesn't have its own binding and
            // setTimeout (as a function call) doesn't create a binding
            // itself, the "obj" context of the traditional function will
            // be used within.
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

// obj.doSomethingLater();
// 


// BIND -- function currying


// function multiple(a,b) {
//     return a * b
// }

// let multipleBy2 = multiple.bind(this, 2)

// console.log(multipleBy2(4));

// let multipleBy10 = multiple.bind(this, 10)


// Prototype inheritance
// Function can access the methods of object

// let dragon = {
//     name: 'tanya',
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing: function() {
//         // console.log(this)
//         return `I am ${this.name}`
//     }
// }

// let lizard = {
//     name: 'lizard',
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         return 'I am tanya'
//     }
// }

// console.log(dragon.sing())

// let singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())


Date.prototype.lastYear = function(){
    console.log(this)
    return this.getFullYear() - 1
}

let data = new Date('1990-10-10').lastYear()
console.log(data)

Array.prototype.myMap = function() {
    let arr= []
    for(let i=0; i<this.length; i++) {
        arr.push((this[i] + 'pip'));
    }

    return arr;
}

console.log([1,2,3].myMap())