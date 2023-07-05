

// let day = ["월","화","수","목","금","토","일"]
// let i = 0
// i++;
// setInterval(()=>{
//     console.log(day[i])

// },1000)
    
// let day = ["월","화","수","목","금","토","일"];
// let i = 0;


// const week = setInterval(()=>{
   
//     console.log(day[i])
//     i++;
//     i %= day.length;
   
    
// },1000)


const h_data = {
    bodycls : ['red','green','blue',],
    h_number : "010-7128-1041",
    content : "이렇게 글자 몽태기를 출력할때 [] 2줄처리가 안되어서 빡친다"
}

console.log(h_data.bodycls.join(' '))  //array ->string
// 출력값이 red green blue

console.log(h_data.content.split("[]")) //string -> array
// 출력값이 [010-7128-1041]

const textArr = h_data.content.split("[]");
textArr.map((v , idx)=>{

    console.log(idx + " : " + v)
})



