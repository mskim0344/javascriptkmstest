// let count = 0 ;
// const timer = setInterval(()=>{
//     count ++;
//     console.log(count)    
// },1000)


// let count = 0 ;
// const timer = setInterval(()=>{
    
//     console.log(count++)    
// },1000)
// 10초뒤에 멈추기 setTimeout, clearInterval

// setTimeout(()=>{
//     clearInterval(timer)


// },10000)

// let day = ["월","화","수","목","금","토","일"];
// let i = 0;


// const week = setInterval(()=>{
//     i++;
//     i %= day.length;
//     console.log(day[i])
   
    
// },1000)

// let day = ["월","화","수","목","금","토","일"];
// let i = 0;
// // "일" 와신난다 출력되게 하기 
// let v = ["와신난다"]

// const week = setInterval(()=>{
    
    
//     console.log(day[i,v])
//     // if( i == 5){
//     //     clearInterval(week)
//     // }
//     i++;
//     i %= day.length;
    
    
   
    
// },1000)
// 토요일까지만 출력하기

// let day = ["월","화","수","목","금","토","일"];
// let i = 0;
// let v = "";

// const week = setInterval(() => {
//     if (i === 6) {
//         v = "와신난다";
//     } else {
//         v = day[i];
//     }
    
//     console.log(v);

//     i++;
//     i %= day.length;
    
//     // if (i === 0) {
//     //     clearInterval(week);
//     // }
// }, 1000);


// let day = ["월","화","수","목","금","토","일"];
// let i = 0;



// console.log("요일 :", day)

// 평일은 월화수목금
// 주말은 토일


// let day = ["월", "화", "수", "목", "금", "토", "일"];
// let i = 0;

// Check if the current day is a weekday or weekend
// let day = ["월","화","수","목","금","토","일"];
// let i = 0;

// console.log("요일 :", day.join(""));

// // 평일은 월화수목금
// // 주말은 토일
// const weekdays = day.slice(0, 5).join("");
// const weekends = day.slice(5).join("");

// console.log("평일은", weekdays, "주말은", weekends);

let day = ["월","화","수","목","금","토","일"];
// day[6]="와신난다"
// day[6]="일"
// day[6] +="요일"


// for(i in day){
//     day[i]+="요일"
// }
// console.log(day)


