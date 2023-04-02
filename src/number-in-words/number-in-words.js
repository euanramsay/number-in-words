export const getNumberInWords = (input) => {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]

  const getHundreds = (number) => {
    const hundreds = Math.floor(number / 100)
    const remainder = number % 100

    if (hundreds === 0) {
      return getTens(remainder)
    }

    if (getTens(remainder) === 'zero') {
      return `${ones[hundreds]} hundred`
    }

    return `${ones[hundreds]} hundred and ${getTens(remainder)}`
  }

  const getHundredThousands = (number) => {
    const hundreds = Math.floor(number / 100)
    const remainder = number % 100

    if (hundreds === 0) {
      return getTens(remainder)
    }

    if (getTens(remainder) === 'zero') {
      return `${ones[hundreds]} hundred`
    }

    return `${ones[hundreds]} hundred and ${getTens(remainder)}`
  }

  const getTens = (number) => {
    const tensDigit = Math.floor(number / 10)
    const remainder = number % 10

    if (tensDigit === 0) {
      return ones[remainder]
    }

    if (tensDigit === 1) {
      return teens[remainder]
    }

    if (remainder === 0) {
      return tens[tensDigit - 2]
    }

    return `${tens[tensDigit - 2]} ${ones[remainder]}`
  }

  const getThousands = (number) => {
    const thousands = Math.floor(number / 1000)
    const remainder = number % 1000

    if (thousands === 0) {
      const hundreds = Math.floor(number / 100)
      const remainder = number % 100

      if (hundreds === 0) {
        const tensDigit = Math.floor(number / 10)
        const remainder = number % 10

        if (tensDigit === 0) {
          return ones[remainder]
        }

        if (tensDigit === 1) {
          return teens[remainder]
        }

        if (remainder === 0) {
          return tens[tensDigit - 2]
        }

        return `${tens[tensDigit - 2]} ${ones[remainder]}`
      }

      if (getTens(remainder) === 'zero') {
        return `${ones[hundreds]} hundred`
      }

      return `${ones[hundreds]} hundred and ${getTens(remainder)}`
    }

    if (remainder === 0) {
      const hundreds = Math.floor(thousands / 100)
      const remainder = thousands % 100

      if (hundreds === 0) {
        return `${getTens(remainder)} thousand`
      }

      if (getTens(remainder) === 'zero') {
        return `${ones[hundreds]} hundred thousand`
      }

      return `${ones[hundreds]} hundred and ${getTens(remainder)} thousand`
    }

    if (remainder > 99) {
      return `${getHundredThousands(thousands)} thousand ${getHundreds(
        remainder
      )}`
    }

    return `${getHundredThousands(thousands)} thousand and ${getHundreds(
      remainder
    )}`
  }

  return getThousands(input)
}
