function countdown(num) {
  if (num === 0) {
    console.log('fim')
  } else if (num !== 0) {
    console.log(num)
    countdown(num - 1)
  }
}

console.log(countdown(10))
