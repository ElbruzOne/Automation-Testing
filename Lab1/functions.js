
const isContain = (arr, obj) => {
    let answer = false;
    arr.forEach(element => {
        let keys_array = Object.keys(element);
        let countOfСoincidence = 0;
        keys_array.forEach((key) => {
            if(element[key] === obj[key] && obj.hasOwnProperty(key)) countOfСoincidence++;
        })
        if(keys_array.length === countOfСoincidence) answer = true;
    });
    return answer;
}

const isContainSubString = (str,subStr) => {
    if(str.includes(subStr)) return true;
}

const returnObj = () => ({type: "shooter", game: "CS:GO"});

const callWithFuncOverArray = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

const callWithFuncOverString = (str, func) => {
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        func(str[i]);
    }
}

module.exports.isContain = isContain;
module.exports.isContainSubString = isContainSubString;
module.exports.returnObj = returnObj;
module.exports.callWithFuncOverArray = callWithFuncOverArray;
module.exports.callWithFuncOverString = callWithFuncOverString;