let choose = document.getElementById("choosecolor")
choose.addEventListener("change", ()=>{
    console.log(choose.value)
    let core = document.getElementById("divi")
    let clr = divi.style.backgroundColor = choose.value
    if(choose.value===clr){
        divi.style.backgroundColor = "clr"
    }
})