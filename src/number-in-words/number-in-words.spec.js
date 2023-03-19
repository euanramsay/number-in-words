import { getNumberInWords } from './number-in-words'

describe('convert numbers to words', () => {
  it('given 0 returns zero', () => {
    const input = 0

    expect(getNumberInWords(input)).toBe('zero')
  })

  //   it('given 1 returns one', () => {
  //     const input = 1

  //     expect(getNumberInWords(input)).toBe('one')
  //   })

  //   it('given 2 returns two', () => {
  //     const input = 2

  //     expect(getNumberInWords(input)).toBe('two')
  //   })

  //   it('given 3 returns three', () => {
  //     const input = 3

  //     expect(getNumberInWords(input)).toBe('three')
  //   })

  //   it('given 10 returns ten', () => {
  //     const input = 10

  //     expect(getNumberInWords(input)).toBe('ten')
  //   })

  //   it('given 11 returns eleven', () => {
  //     const input = 11

  //     expect(getNumberInWords(input)).toBe('eleven')
  //   })

  //   it('given 12 returns twelve', () => {
  //     const input = 12

  //     expect(getNumberInWords(input)).toBe('twelve')
  //   })

  //   it('given 19 returns nineteen', () => {
  //     const input = 19

  //     expect(getNumberInWords(input)).toBe('nineteen')
  //   })

  //   it('given 20 returns twenty', () => {
  //     const input = 20

  //     expect(getNumberInWords(input)).toBe('twenty')
  //   })

  //   it('given 30 returns thirty', () => {
  //     const input = 30

  //     expect(getNumberInWords(input)).toBe('thirty')
  //   })

  //   it('given 45 returns forty five', () => {
  //     const input = 45

  //     expect(getNumberInWords(input)).toBe('forty five')
  //   })

  //   it('given 99 returns ninety nine', () => {
  //     const input = 99

  //     expect(getNumberInWords(input)).toBe('ninety nine')
  //   })

  //   it('given 100 returns one hundred', () => {
  //     const input = 100

  //     expect(getNumberInWords(input)).toBe('one hundred')
  //   })

  //   it('given 101 returns one hundred and one', () => {
  //     const input = 101

  //     expect(getNumberInWords(input)).toBe('one hundred and one')
  //   })

  //   it('given 163 returns one hundred and sixty three', () => {
  //     const input = 163

  //     expect(getNumberInWords(input)).toBe('one hundred and sixty three')
  //   })

  //   it('given 312 returns three hundred and twelve', () => {
  //     const input = 312

  //     expect(getNumberInWords(input)).toBe('three hundred and twelve')
  //   })

  //   it('given 999 returns nine hundred and ninety nine', () => {
  //     const input = 999

  //     expect(getNumberInWords(input)).toBe('nine hundred and ninety nine')
  //   })

  //   it('given 1050 returns one thousand and fifty', () => {
  //     const input = 1050

  //     expect(getNumberInWords(input)).toBe('one thousand and fifty')
  //   })

  //   it('given 25105 returns twenty five thousand one hundred and five', () => {
  //     const input = 25105

  //     expect(getNumberInWords(input)).toBe(
  //       'twenty five thousand one hundred and five'
  //     )
  //   })

  //   it('given 503231 returns five hundred and three thousand two hundred and thiry one', () => {
  //     const input = 503231

  //     expect(getNumberInWords(input)).toBe(
  //       'five hundred and three thousand two hundred and thiry one'
  //     )
  //   })

  //   it('given 999999 returns nine hundred and ninety nine thousand nine hundred and ninety nine', () => {
  //     const input = 999999

  //     expect(getNumberInWords(input)).toBe(
  //       'nine hundred and ninety nine thousand nine hundred and ninety nine'
  //     )
  //   })
})
