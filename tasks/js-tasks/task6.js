// return array of same element from two array

function similarElementArr(arr1, arr2) {
    return arr1.filter((n) => arr2.includes(n));
}

const arr1 = [10, 20, 30, 40, 21];
const arr2 = [21, 30, 40, 50, 60];
console.log(similarElementArr(arr1, arr2));