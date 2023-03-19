import { createInterface } from 'readline'
import { isPositiveNumberGreaterThanZero } from './check-number/check-number'
import { getNumberInWords } from './number-in-words/number-in-words'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('\nI can convert any number from 0 to 999,999 in to words')
readline.question('What number would you like in words? ', (number) => {
  if (isPositiveNumberGreaterThanZero(number)) {
    console.log(getNumberInWords(number))
    readline.close()
  } else {
    console.log(`\nSorry, '${number}' is not a valid input`)
    readline.close()
  }
})

readline.on('close', () => {
  console.log('\nThank you! :)')
  process.exit(0)
})
