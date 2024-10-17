const leapYears = function(year) {
    let isLeapYear = false;

    const divQuatro = year % 4 == 0;
    const divCem = year % 100 == 0;
    const divQuatrocentos = year % 400 == 0;

    if ((divCem && divQuatrocentos) || (divQuatro && !divCem))  {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
