// insert dashes between small letter and capital letter in camel-case string

function insertDash(str) {
    const arr = [];
    for (let i=0; i<str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            arr.push('-', str[i]);
        } else {
            arr.push(str[i]);
        }
    }
    return arr.join('');
}

console.log(insertDash('checkOutProduct'));