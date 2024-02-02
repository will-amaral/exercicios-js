//@ts-check
/**
 * @typedef {Object} Temperature
 * @property {number} value - The temperature value
 * @property {'C' | 'F'} unit - The chose unit (Celsius of Fahrenheit)
 */

/**
 * Função para a conversão de temperaturas
 * @param {Temperature[]} temps
 * @returns {Temperature[]}
 */
function convertTemps(temps) {
  return temps.map(({ unit, value }) => {
    if (unit === 'C') return { unit: 'F', value: (value * 9) / 5 + 32 }
    else return { unit: 'C', value: Math.round(value - (32 * 5) / 9) }
  })
}
function cparaf(indice) {
  temps[indice].value = (temps[indice].value * 9) / 5 + 32
  temps[indice].unit = 'F'
}

function fparac(indice) {
  const seila = temps[indice].value - 32
  temps[indice].value = Math.round((seila * 5) / 9)

  return temps
}

export default convertTemps
cd
