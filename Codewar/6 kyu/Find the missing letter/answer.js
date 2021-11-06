function findMissingLetter(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i].charCodeAt() - array[i - 1].charCodeAt() === 2)
      return String.fromCharCode(array[i].charCodeAt() - 1);
  }
}

/*
examples

<case 1>
array = ['a','b','c','d','f']

return = 'e'

<case 2>
array = ['O','Q','R','S']

return = 'P'
*/
