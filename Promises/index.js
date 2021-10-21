console.log("index");

// const promise = new Promise((resolve, reject) => {
//         resolve('hello')
// })

// promise.then((data) => console.log(data))

// const myPromise = new Promise((resolve, reject) => {
//     resolve();
//   });

//   myPromise
//     .then(data => {
//         throw new Error("ooops");
//         console.log("first value");

//     })
//     .catch(() => {
//       console.log("catch an error");
//     })
//     .then(data => {
//     console.log("second value");
//     });

// Promise all --> Returns a single promise resolved then all promises are resolved

// const promise1 =  new Promise((resolve,reject) => {
//     setTimeout(resolve, 500, 'first value');
//   });
//   const promise2 =  new Promise((resolve,reject) => {
//     // setTimeout(resolve, 1000, 'second value');
//     reject(Error('OOps'))
//   });

//   Promise
//     .race([promise1, promise2])
//     .then(data => {
//     //   const[promise1data, promise2data] = data;
//       console.log(data);
//     }).catch((data) => console.log(data)) gbs gts

function fetchUserById(id) {
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  return fetch(url)
    .then((response) => response.json())
    .then((user) => ({
      id: user.id,
      name: user.name,
    }));
}

// let fetchData = fetchUserById(2)
// fetchData.then((data) => console.log(data))

async function fetchUserAsync(id) {
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  let fetchData = await fetch(url)
  let res = await fetchData.json()
  console.log('RS', res)
  return res
  // return await fetchData
}

// console.log(fetchUserAsync(2));
// let fetchAsync = fetchUserAsync(2)
// console.log(fetchAsync);


const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = [];
ids.forEach(async (id) => {
  const user = await fetchUserAsync(id);
  console.log(user)
  names.push(user.name);
});
console.log(names);




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