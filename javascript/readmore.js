let a = document.getElementById("parent");
var values="true";
a.addEventListener("click",(val)=>{
    let target1 = val.target;
        if(target1.className ==="clickbut"){
        if(values=="true")
        {
            values="false";
            target1.previousElementSibling.style.display ="inline";
            target1.textContent ="Read_less";
        }
        else{

            values="true";
            target1.previousElementSibling.style.display ="none"
            target1.textContent ="Read_More"
        }
        }
    },true)