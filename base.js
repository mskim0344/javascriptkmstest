// 1 1번 콘솔창에 50이 나오도록 함수 수정하기
// numadd(10, 5);
// function numadd(c,b){
//     c = c * b
//     console.log(c)
// } 



// 2번 문제 콘솔창에 아래와 같이 출력되도록 수정
//  앞의 값은 10이고 뒤의 값은 5입니다.
// numadd의 실행결과는 15다

// numadd(10,5);
// function numadd(c,b){


// console.log(`앞의 값은 ${c}이고 뒤의 값은 ${b}입니다.
// numadd의 실행결과는 ${c+b}다`)
// }
let dbnavi = [
    topad : {
         adtitle : "모든 회원에게 7월의 다가오는 혜택",
         adlink : "http://www.11st.co.kr"

    },
    {
        nm : ['회사소개','company.html'],
        cla : 'navi com'
    },
    {
        nm : ['제품소개','show,html',],
        cla : 'navi pro'
    },
    {
        nm : ['고객센터','center.html'],
        cla : 'navi contact'
    }
]
// for(i in dbnavi){
//     console(`
//                 <a href='${dbnavi[1].nm[1]}'class=${dbnavi[1].cla}>
//                 ${dbnavi[i].nm[0]}
//                 </a>`)
// }
const menuUI=(dbnm) =>{
    for(i in dbnm){
        console.log(`
                    <a href='${dbnm[i].nm[1]}'class=${dbnm[1].cla}>
                    ${dbnm[i].nm[0]}
                    </a>`)        
    }

}
menuUI(dbnavi)