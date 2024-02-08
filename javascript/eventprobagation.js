let a = document.getElementById("grandparent")
a.addEventListener("click", (value)=>{
    a.style.backgroundColor = "red"
    console.log("a clicked")
    console.log(value.eventPhase)
    value.stopPropagation()
})
let b = document.getElementById("parent")
b.addEventListener("click", (val)=>{
    b.style.backgroundColor = "green"
    console.log("b clicked")
    console.log(val.eventPhase)
    val.stopPropagation()
})
let c = document.getElementById("child")
c.addEventListener("click", (value)=>{
    c.style.backgroundColor = "yellow"
    console.log("c clicked")
    console.log(value.eventPhase)
    value.stopPropagation()
})
 let check = document.getElementById("check")
    check.addEventListener("click", (eventobject)=>{
    eventobject.preventDefault();
    eventobject.stopPropagation();
    let head = document.getElementById("head")
    head.textContent = " conten prevented"
 })
