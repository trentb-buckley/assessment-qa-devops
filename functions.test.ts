const {shuffleArray} = require('./utils')
let newArr = [1,2,3,4,5,6,7,8,9]
describe('shuffleArray should', () => {
    test("shuffle arrays", () => {
        let newArr = [1,2,3,4,5,6,7,8,9]
        let newNewArr = shuffleArray(newArr)
        expect(newArr).not.toBe(newNewArr)
        
    })
    test("return an array", () => {
        let array = shuffleArray([1,2,3,4,5])
        expect(Array.isArray(array)).toBe(true)
    })
    test("return an array the same length as the original", () => {
        let newArr = [1,2,3,4,5,6,7,8,9]
        let newNewArr = shuffleArray(newArr)
        expect(newArr.length).toBe(newNewArr.length)
    })
})