let icon=document.getElementById("eye1");
let value1="one";
icon.addEventListener("click",()=>{
    if(value1==="one")
    {
        document.getElementById("repass1").type="text"
        value1="two";   
    }
    else{
        value1="one";
        document.getElementById("repass1").type="password";
    }
})

let l1=document.getElementById("stdname1");
l1.addEventListener("focusout",()=>{
    let check=document.getElementById("stdname1").value ;
    if(check=="" || check>0)
    {
        document.getElementById("span1").style.color="red"
        document.getElementById("span1").style.display="block";
        document.getElementById("span1").textContent="* Enter valid name"
    }
    else{
        document.getElementById("span1").style.display="block";
        document.getElementById("span1").style.color="green"
        document.getElementById("span1").textContent="valid name"

    }
})

let l2=document.getElementById("repass1");
l2.addEventListener("focusout",()=>{
    let check1=document.getElementById("repass1").value;
    if(check1==="")
    {
        document.getElementById("span2").style.display="block";
    }
    else{
        document.getElementById("span2").style.display="none";
    }
})

let click2=document.getElementById("but2");
click2.addEventListener("click",()=>{
    let a=document.getElementById("stdname1").value;
    let b=document.getElementById("repass1").value;
    if(a=="" || b=="")
    {
        if(a=="")
        {
            document.getElementById("span1").textContent="Please fill this";
            document.getElementById("span1").style.color="red"
            document.getElementById("span1").style.display="block";
        }
        else{
            document.getElementById("span2").textContent="Please fill this";
            document.getElementById("span2").style.color="red"
            document.getElementById("span2").style.display="block";
        }
    }
    else{
        alert("Login Done");
        location.reload();
    }
})