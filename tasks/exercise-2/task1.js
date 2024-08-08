// 1. write a javascript function to get the first and last element of an array. passing a parameter 'n' will return the first 'n' elements of the array and last 'n' elements of the array

function getElements(n) {
    let static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let firstElements = static_array.slice(0, n);
    let lastElements = static_array.slice(-n);
    
    console.log(`first ${n} elements are:`, firstElements);
    console.log(`last ${n} elements are:`, lastElements);
    
}

getElements(3);