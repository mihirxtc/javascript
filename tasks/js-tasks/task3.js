// return arrays of element that has length > 5

const arr = ['bag', 'monitor', 'mouse', 'keyboard', 'headphone'];
const bigElements = arr.filter((element) => {
    if (element.length > 5) return element;
})

console.log(bigElements);