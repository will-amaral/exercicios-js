/**
 * @param {string} str - A string a ser revertida
 */
function reverse(str) {
  if (str.length === 0) {
    return ''
  } else {
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
  }
}
//declarar newstring dentro do else e concertar a lógica
export default reverse
