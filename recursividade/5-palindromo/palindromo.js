/**
 * @param {string} str - A string a ser testada
 */
function isPalindrome(str) {
  // O seu código vem aqui
  let palindromo = str.split('')
  if (palindromo[0] !== palindromo[palindromo.length - 1]) {
    return false
  } else if (palindromo.length === 0) {
    return true
  } else {
    palindromo.splice(0, 1)
    palindromo.splice(palindromo.length - 1, 1)
    console.log(palindromo)
    isPalindrome(palindromo.join(''))
  }
}

export default isPalindrome
