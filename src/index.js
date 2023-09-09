module.exports = function check(str, bracketsConfig) {
  // your 
  console.log(str)

  let openbrackets = []  
  let closingbrackets = []

let stack = []

  for (let i=0; i<bracketsConfig.length; i++) {
      openbrackets.push(bracketsConfig[i][0])
      closingbrackets.push(bracketsConfig[i][1])
  }

console.log(openbrackets)
console.log(closingbrackets)

  for (let elem of str) {
    var bracketIndex

    if (openbrackets.includes(elem) && !closingbrackets.includes(elem)) {
      bracketIndex = openbrackets.indexOf(elem)
      stack.push(bracketIndex)
      console.log(`${bracketIndex} - This is an index of open bracket in array of open brackets. 
      Stack now is ${stack}`)
    } else if (openbrackets.includes(elem) && closingbrackets.includes(elem)) {
      // Checking if we already have this element in stack 
      bracketIndex = openbrackets.indexOf(elem)
      stack.push(bracketIndex)

      // console.log(stack.length-1)
      console.log(stack[stack.length-2])
      // console.log(stack)
      // console.log(bracketIndex)

      if (stack[stack.length-2] === bracketIndex && stack[stack.length-2] !== null && stack[stack.length-2] !== -1) {
        stack.pop()
        stack.pop()
      }
      console.log(`We've found the same symbol, stack now ${stack}`)
      // bracketIndex = openbrackets.indexOf(elem)
       
    } 
    else {
      bracketIndex = closingbrackets.indexOf(elem)
      // console.log(console.log(`stack now is ${stack}, brackectindex is ${bracketIndex}`))
      if (stack.pop() !== bracketIndex) {
        console.log(`2nd - Sstack now is ${stack}, brackectindex is ${bracketIndex}`)
        // console.log(bracketIndex)
        console.log(false)
        return false
      } console.log(`pop successfull, stack now ${stack}`)
    }
  }

  console.log('final='+stack.length === 0)
return stack.length === 0

}
