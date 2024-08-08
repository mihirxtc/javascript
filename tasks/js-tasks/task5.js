// return factorial of number

function findFactorial(n) {
    let fact = 1;
    for (let i=1; i<=n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(findFactorial(5));