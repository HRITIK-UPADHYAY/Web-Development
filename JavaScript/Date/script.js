let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

// //IN DATE Object days and month follow 0-based indexing.


// //how to fetch the customDate.
// let customDate = new Date(2023, 5, 12, 7, 30, 0);
// console.log(customDate); //milisecond.
// console.log(parseInt(customDate/1000)); //Second
// console.log(date - customDate); // how many days
// console.log((date.getTime() - customDate.getTime())/1000 );


//1970 jan 1st 12:00AM.
const unixDay = new Date(1970, 0, 1, 5, 30, 0);
console.log(unixDay.getTime());