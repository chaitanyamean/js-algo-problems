

const userName = Symbol('krishna')

let userObj = {
    [userName]: 'Krishna',
    password: '1234',
    age: 22
}

console.log(userObj.userName)