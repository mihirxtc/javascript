// 9. write a javascript function to convert a unix timestamp to time

function convertFromUnixTimestamp(unixTimestamp) {
    let timeStampInMs = unixTimestamp * 1000;
    let date = new Date(timeStampInMs);

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Asia/Kolkata'
    }

    let formattedTime = date.toLocaleString('en-IN', options);
    console.log(formattedTime);
}

let unixTimestamp = 1723086840
convertFromUnixTimestamp(unixTimestamp);