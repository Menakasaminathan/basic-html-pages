console.log("start")
console.log("a")
console.log("b")
//     setTimeout( function fun(){ 
// },3000)
console.log("d")
console.log("e")
console.log("end")


let but = document.getElementById("but")
let temp = 0;
let timing;

let function1 = function fun(){
    timing = setInterval(()=>{
        let head = document.getElementById("head");
        head.textContent = temp++;
    },500*2)
    but.removeEventListener("click", function1);
}
but.addEventListener("click", function1)

let stop = document.getElementById("but2")
stop.addEventListener("click",()=>{
    clearInterval(timing);
    but.addEventListener("click", function1)
    
})
