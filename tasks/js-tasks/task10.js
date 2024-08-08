// return names in alphabetical order from array of object

function sortNames(arr) {
    return arr.map((person) => person.name).sort();
}

const persons = [
    { name: 'zenith' },
    { name: 'mihir' },
    { name: 'aryan' }
];

console.log(sortNames(persons));