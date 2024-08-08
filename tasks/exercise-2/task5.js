// 5. write a javascript program to compute the union of two arrays, and write a javascript function to find the difference of two array, and intersection of two arrays

let arr1 = [0, 1, 2, 3];
let arr2 = [3, 4, 5];


// union
function union(arr1, arr2) {
    let unionArr = [...arr1, ...arr2];
    console.log('union array:', unionArr);
}   

// intersection
function intersection(arr1, arr2) {
    let intersectionArr = arr1.filter((element) => arr2.includes(element));
    console.log('intersection array:', intersectionArr);
}

// difference = (arr1 - arr2) & (arr2 - arr1)
function difference(arr1, arr2) {
    let differenceArr = arr1.filter((element) => !arr2.includes(element));
    console.log('diffrence array:', differenceArr);
}

union(arr1, arr2);
intersection(arr1, arr2);
difference(arr1, arr2);
difference(arr2, arr1);