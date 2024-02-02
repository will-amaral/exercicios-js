//@ts-check
/**
 * Uma função que retorna o lucro máximo de vendas de ações
 * @param {number[]} purchases - os valores de compras das ações
 * @param {number[]} sales - os valores de venda das mesmas ações
 */

function maxProfit(purchases, sales) {
  // Seu código vem aqui

  const trade = []

  for (let indice = 0; indice < purchases.length; indice++) {
    trade.push(sales[indice] - purchases[indice])
  }

  let lucro = Math.max(...trade)
  let posicao

  for (let indicet = 0; indicet < trade.length; indicet++) {
    console.log('A receita do indice ' + indicet + ' foi ' + trade[indicet])
    if (lucro === trade[indicet]) {
      posicao = indicet
    }
  }

  return 'Posição ' + posicao + ' - Lucro: ' + lucro
  //console.log('O maior Lucro foi ' + lucro + ' no indice ' + posicao)

  // "Posição 1 - Lucro: 5"
}

export default maxProfit

const purchases = [7, 1, 5]
const sales = [3, 6, 4]
const output = maxProfit(purchases, sales)
console.log(output)
