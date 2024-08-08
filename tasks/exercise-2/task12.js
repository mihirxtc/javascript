// 12. write a javascript function to chop a string into chunks of a give length

function chopString(str, length) {

    const arr = [];

    for (let i=0; i<str.length; i+=length) {
        arr.push(str.slice(i, i+length));
    }

    console.log(arr);
    
}

chopString('rapidops', 2);