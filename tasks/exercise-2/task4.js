// 4. write a javascript program to shuffle an array

function shuffleArray(arr) {
    
    for (let i=arr.length-1; i>0; i--) {
        const random = Math.floor(Math.random() * (i+1));
        [arr[i], arr[random]] = [arr[random], arr[i]]
    }

    console.log(arr);
    
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffleArray(arr);



// other way (inefficient)
function shuffleArray1(arr) {
    let shuffledArr = arr.sort(() => Math.random() - 0.5);
    console.log(shuffledArr);
}

shuffleArray1(arr)