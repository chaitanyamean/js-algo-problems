let kitty = {
    name: 'squiggy',
    color: 'orange',
    age: 5,
    chipId: 'ZER342SDE',
    offspring:['mars', 'jupiter', 'mercury'],
    bestFriend: {
        name: 'crackers'
    },
    meow: function(){
        return 'Meow says ' + this.name
    }
}

let mudge = JSON.parse(JSON.stringify(kitty))
// In normal json serialization, funtions, Date, 
// regular expressions

mudge.name = 'Mudge';
mudge.chipId = 'YZD908';

let knucle = Object.assign({}, kitty)
knucle.name=  'Knucle';
// knucle.meow = function() {
//     return 'Yeeeeeow, says ' + this.name
// }
// knucle.bestFriend.name ='Boost';

/**
 *  OBJECT ASSIGN
 If we are using object.assign it won't be a deep copy, if we try to add a 
  nested object in knucle it will replecate in original obj(kitty)
 */

/**
 * 
 * ES6
 * knucle = {...kitty} 
 * It will work for functions but in deep 
 * nested it will fails same as object.assign
 */

let es6Obj = {...kitty}
es6Obj.meow = function(){
    return 'ES6 Meow'
}
es6Obj.bestFriend.name  = 'ES6'
debugger;


// If all fails we can use lodash _deepclone

// var comma = _.cloneDeep(kitty)


/**
 * 
 * What is this
 * 
 */
