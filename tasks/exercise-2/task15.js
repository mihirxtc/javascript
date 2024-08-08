// 15. write a javascript function to delete particular object from array and add new object at particular position also if the position does not exist then error message should be show to the user

function deleteAndAddObj(arr, deletePos, newObj, newPos) {
    if (deletePos < 1 || deletePos > arr.length) {
        console.log('Error! invalid position');
    }

    arr.splice(deletePos -1, 1)
    if (newPos < 1 || newPos > arr.length + 1) {
        console.log('Error! invalid position');
    }

    arr.splice(newPos -1, 0, newObj)
    console.log(arr);
}

let arr = arrayOfObjects = [
    {id: 1, name: "Mihir", age: 20},
    {id: 2, name: "Aryan", age: 21},
    {id: 3, name: "Krish", age: 18},
];

deleteAndAddObj(arr, 2, {id: 4, name: 'kuldeep', age: 26}, 0);