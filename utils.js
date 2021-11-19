function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}

module.exports = {
    shuffleArray
}

let newArr = [1,2,3,4,5,6,7,8,9]
console.log(shuffleArray(newArr))