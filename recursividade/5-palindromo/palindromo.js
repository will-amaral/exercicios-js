/**
 * @param {string} str - A string a ser testada
 */
function isPalindrome(str) {
  // O seu código vem aqui
  let newStr = str.replace(/\s/g, '')
  let strMinisculo = newStr.toLowerCase()
  if (strMinisculo[0] !== strMinisculo[strMinisculo.length - 1]) {
    return false
  } else if (strMinisculo.length === 1) {
    return true
  } else {
    newStr = strMinisculo.slice(1, -1)
    return isPalindrome(newStr)
  }
}

export default isPalindrome
