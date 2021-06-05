export function Factorial(n) {
    if(n<3){
        return n;
    }

    let result = 2;
    for(let i=3; i<=n; i++){
        result *= i;
    }

    return result;
}

console.log( Factorial(4) );