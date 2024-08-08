// 13. write a javascript function to print an integer with commas as thousand separator

function numberWithCommas(number) {
    let num = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(num);
}

numberWithCommas(1000000000)