const sumAll = function(num1, num2) {
    let result = 0;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0){
        return "ERROR";
    } else if (num2 > num1){
        result = (num1+num2) * (num2 - num1 + 1)/2;
    } else {
        result = (num1+num2) * (num1 - num2 + 1)/2;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
