// 14. write a javascript function to print array of object in ascending order of age & descending order of name, make array of object with three fields, 1.id, 2.name, 3.age

function sortNames(arr) {
    arr.sort((a, b) => (a.name > b.name) ? -1 : 1);
    arr.sort((a, b) => a.age - b.age);
    console.log(arr);
}

let arr = [
    {id: 1, name: "Mihir", age: 20},
    {id: 2, name: "Aryan", age: 21},
    {id: 3, name: "Krish", age: 18},
    {id: 4, name: "Kuldeep", age: 27},
    {id: 5, name: "Anuj", age: 20},
    {id: 6, name: "karan", age: 21},
    {id: 8, name: "John", age: 32},
    {id: 9, name: "Alice", age: 22},
    {id: 10, name: "Smith", age: 25}
];
sortNames(arr);