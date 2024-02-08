// function course() {

//     let click = document.getElementById("choosecourse").value;
//     document.getElementById("heading").textContent = ` the selected place ${click}`

// }

// let course = document.getElementById("choosecourse")
// choosecourse.addEventListener("change",function(){

//     let h1 = document.getElementById("heading")
//     h1.textcontent = `the selected place ${course.value}`
// })


let add = document.getElementById("add");

add.addEventListener("click",()=>{
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let sum = Number(num1) + Number(num2)
    console.log(sum)

    let head = document.getElementById("heading")
    head.textContent = `the sum of ${num1} and ${num2} is ${sum}`;
})