const fibonacci = function(n) {
    let numAnterior = 0, 
        numAtual = 1, 
        manterNumAnterior = 0,
        position = n - 1;

    if(n > 0){
        for(let i = 0; i < position; i++){
            manterNumAnterior = numAnterior;
            numAnterior = numAtual;
            numAtual += manterNumAnterior;
        }
    } else if (n == 0){
        return 0;
    } else {
        return 'OOPS';
    }

    return numAtual;
};

// Do not edit below this line
module.exports = fibonacci;
