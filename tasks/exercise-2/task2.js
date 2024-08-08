// 2. write a javascript program which accepts a number as input and insert dashes (-) between each two even numbers

function insertDash(numbers) {
    let arr = [];
    for (let i=0; i<numbers.length; i++) {
        if (numbers.charAt(i) % 2 == 0 && numbers.charAt(i+1) % 2 == 0) {
            arr.push(numbers.charAt(i), '-');
        } else {
            arr.push(numbers.charAt(i));
        }
    }
    console.log(arr.join(''));
}

let numbers = '23465289';
insertDash(numbers);