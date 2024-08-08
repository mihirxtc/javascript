// 11. write a javascript function to insert a string within a string at a perticular position (default is 1)

function insertString(insertString, position = 1) {

    let string = 'Mouse nice';

    let staringElements = string.slice(0, position - 1);
    let endingElements = string.slice(position - 1);

    console.log(staringElements + insertString + endingElements);
    
}

insertString('is ', 7)