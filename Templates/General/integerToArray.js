const intToArray = function(num){
    let result = [];

    let sign = num<0 ? -1: 1;
    num = sign * num;
    while (num != 0) {
        let pop = num % 10;
        num = Math.floor(num/10);

        result.unshift(pop);
    }

    return result;
}

let arr = intToArray(123456);
console.log( arr );