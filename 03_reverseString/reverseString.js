const reverseString = function(string) {
    let reverse = "";
    for (let i = 0; i <= string.length; i++){
        reverse += string.charAt(string.length - i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
