function showTime() {
    var d = new Date();
    document.querySelector("p").innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

// const moment = require('moment');
var moment = require('moment-timezone');
a = moment().tz("Asia/Taipei").format("YYYY-MM-DD HH:mm");
console.log(a)



// var d = new Date();
// var now  = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes()
// console.log(now)


// 2021-01-10 04:21