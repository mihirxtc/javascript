// return the array of numbers that are prime

function isPrime(num) {
    if (num <= 1) return false;
    for (let i=2; i<num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function arrayOfPrimes(arr) {
    const primeArr = [];
    for (let num of arr) {
        if (isPrime(num)) {
            primeArr.push(num);
        }
    }
    return primeArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayOfPrimes(numbers));