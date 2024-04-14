//DATES

let myDate=new Date()


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let my= new Date(2023,11,29)
let my= new Date("12-29-2023")
console.log(my.toDateString());

let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(my.getTime());

let newdate= new Date()
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday:"long",
})
