// check wheather the string is palindrome

function checkPalindome(str) {
    str = str.trim();
    const reversedStr = str.split('').reverse().join('');
    if (str == reversedStr) return true;
    return false;
}

console.log(checkPalindome('    iti'));