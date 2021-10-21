// function sum(a,b) {
//     return a+b
// }

// const sum2 = (a,b) => {
//     return a+b
// }


// function isPositive(num) {
//     return num>=0
// }

// function randomNum() {
//     return Math.random
// }

class Person{
    constructor(name){
        this.name = name
    }
    printNameArrow(){
        setTimeout(()=> {
            console.log('Arrow', this.name)
        }, 1000)
    }

    printNameFunc(){
        setTimeout(function(){
                console.log('func', this.name)
        }, 1000)
    }
}

let person = new Person('Kyle')
person.printNameArrow()
person.printNameFunc()
