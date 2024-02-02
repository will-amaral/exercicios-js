/**
 *
 * @param {number} n - O número limite para a soma
 */
function sum(n) {
  if (n === 1) return 1
  if (n === 0) return 0
  if (n < 0) return 'Erro: n deve ser um número natural'
  return n + sum(n - 1)
}
console.log(sum(5))
export default sum
