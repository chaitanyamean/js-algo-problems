/// "(()()()()))"

//https://medium.com/@robhitt/balance-parenthesis-in-javascript-60f451a00c4c

function isBalanced(input) {
    if (input === null) {  return true; }

  let convertToArray = input.split("");

  let stack = [];

  let bracket = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
console.log(input)
  for(let char of input) {
      console.log(stack)
      if(bracket[char]) {
          stack.push(bracket[char])
      } else {
          if(stack.pop() !== char) return false
      }
  }
  return (!stack.length)
  
}






console.log(isBalanced("[]()"))