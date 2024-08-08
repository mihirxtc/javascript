// 7. write a javascript function to get the month name from a perticular date.

function getMonthFromDate(date) {
    const monthName = date.toLocaleString('en-US', {month: 'long'});
    console.log(monthName);
}

let currentDate = new Date();
let monthName = getMonthFromDate(currentDate);
