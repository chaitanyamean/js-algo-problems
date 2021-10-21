/// "(()()()()))"

//https://medium.com/@robhitt/balance-parenthesis-in-javascript-60f451a00c4c

function isBalanced(input) {
    if (input === null) {  return true; }


  let stack = [];

  let bracket = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  for(let char of input) {
      if(bracket[char]) {
          console.log('Bracket',char);
          stack.push(bracket[char])
        } else {
            console.log('Else',char);
            if(stack.pop() !== char) return false
        }
          console.log('Stack',stack)
      
  }
  return (!stack.length)
  
}






// console.log(isBalanced("[]((()()(((()))))"))



const add = function(a) {
    
    return function (b) {
        if(b) {
            console.log(a)
            return add(a+b)
        }
        return a
    }
    
}

console.log(add(2)(3)(4)())

// let intermediate = add(2)
// console.log(intermediate(3))
