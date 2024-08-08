// 8. write a javascript function to get difference between two dates, from maximum unit to minimum unit

function getDateDifference(startDate, endDate) {

    let timeDifference = endDate - startDate;
    
    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);

    let difference = {
        years,
        months: months % 12,
        days: Math.floor(days % 30)
    }

    console.log(difference);
}

let startDate = new Date('2020-02-05T00:00:00Z');
let endDate = new Date('2028-04-25T00:00:00Z');
getDateDifference(startDate, endDate);