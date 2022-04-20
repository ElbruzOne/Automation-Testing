const arrSum = (array) => {
    let result = 0;
    array.forEach(element => {
        result += element;
    });
    return result;
}

module.exports.arrSum = arrSum;

const arrPos = (array) => {
    let newArray = array.filter(value => (value >= 0));
    return newArray;
}

module.exports.arrPos = arrPos;

const arrNeg = (array) => {
    let newArray = array.filter(value => (value <= 0));
    return newArray;
}
module.exports.arrNeg = arrNeg;