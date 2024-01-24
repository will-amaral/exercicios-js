/**
 * @param {string} str - A string a ser revertida
 */

const a = []
function reverse(str) {
  // Seu código vem aqui
  let transformaçao = str.split('')
  //const a = []
  if (transformaçao[0] === a[a.length]) {
    console.log(a.join(''))
  } else {
    a.push(transformaçao[transformaçao.length - 1])
    transformaçao.splice(transformaçao.length - 1, 1)
    reverse(transformaçao.join(''))
  }
}

export default reverse

//preciso fazer const a se tornar uma string novamente
