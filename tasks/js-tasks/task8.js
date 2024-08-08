// find difference between biggest and smallest element from an array

function findDifference(arr) {

    let max = -Infinity;
    let min = Infinity;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(max - min);
    
}

let arr = [1, 2, 3, 4, 5];
findDifference(arr);