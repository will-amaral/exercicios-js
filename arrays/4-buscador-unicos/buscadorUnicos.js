export default function getUnique(itens) {
  let numerosUnicos = []

  for (let indice = 0; indice < itens.length; indice++)
    if (!numerosUnicos.some((numero) => numero === itens[indice])) {
      numerosUnicos.push(itens[indice])
    }
  return numerosUnicos
}

const items = [1, 2, 2, 3, 4, 4, 5]
const output = getUnique(items)
console.log(output)
