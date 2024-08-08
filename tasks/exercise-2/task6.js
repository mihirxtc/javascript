// 6. write a javascript function to fill an array with values on supplied bound

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function fillArray(arr, bound) {

    let length = arr.length;
    let index = 0;
    let str = '';

    while (index < length) {
        str += arr[index];
        index += bound;
    }

    console.log(str.split(''));

}

fillArray(arr, 3);