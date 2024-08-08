// take a string as input and set each character of string as key & how many time that character occures in string as value and return an object


function addProperties(str) {

    let obj = {};

    for (let char of str) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }

    console.log(obj); 
}

let str = 'mihir';
addProperties(str);
