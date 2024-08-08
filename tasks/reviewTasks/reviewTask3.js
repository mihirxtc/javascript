// write function to modify array, first delete a element from array, the at the place of deleted element insert new element, and return 3 unique array.

function modifyArr(arr, deleteElement, replaceElement) {
    console.log('original array:', arr);
    if (arr.includes(deleteElement)) {

        // delete
        const delArr = [...arr];
        const index = delArr.indexOf(deleteElement);
        delArr.splice(index, 1);
        console.log('deleted array:', delArr);
        console.log('original array:', arr);

        // splice
        const repArr = [...delArr];
        repArr.splice(index, '', replaceElement);
        console.log('replace array:', repArr);
        console.log('original array:', arr);

        console.log('Is all 3 arrays are unique?', !(arr == delArr == repArr));

    } else {
        console.log(`${deleteElement} not exists in array`, arr);
    }
}

modifyArr(['future', 'javascript', '?'], 'javascript', 'rust');