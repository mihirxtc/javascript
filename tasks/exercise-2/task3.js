// 3. write a javascript program to find the most frequent item of an array

function mostFrequentItem(arr) {
    arr.sort((a, b) => a - b);

    let count = 1;
    let max = 0;
    let element;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            count++;
        } else {
            count = 1;
        }

        if (count > max) {
            max = count;
            element = arr[i];
        }
    }

    console.log('most frequent item of array:', element);
    
}

let arr = [1, 2, 3, 3, 3, 4, 5];
mostFrequentItem(arr);