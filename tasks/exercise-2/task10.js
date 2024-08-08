// 10. write a javascript function to get time difference in years, months, weeks, days, hours and minutes between two dates

function getTimeDifference(startDate, endDate) {
    
    let timeDifference = endDate - startDate;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let months = Math.floor(weeks / 30.44);
    let years = Math.floor(months / 12);

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    }

}

let startDate = new Date('2024-01-15');
let endDate = new Date();

console.log(getTimeDifference(startDate, endDate));
