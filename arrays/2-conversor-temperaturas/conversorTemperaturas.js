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
  for (let indice = 0; indice < temps.length; indice++)
    if (temps[indice].unit === 'C') {
      cparaf(indice)
    } else {
      fparac(indice)
    }

  function cparaf(indice) {
    temps[indice].value = temps[indice].value * 9 / 5 + 32
    temps[indice].unit = 'F'
  }

  function fparac(indice) {
    const seila = temps[indice].value - 32
    temps[indice].value = Math.round(seila * 5 / 9)
    temps[indice].unit = 'C'
  }

  temps

  return temps
}

export default convertTemps
