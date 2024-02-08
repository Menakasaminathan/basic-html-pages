let ic=document.getElementById("eye");
let value="one"
ic.addEventListener("click",()=>{
    if(value==="one")
    {
        document.getElementById("repass").type="text"
        value="two";
    }
    else{
        value="one";
        document.getElementById("repass").type="password";
    }
})

let check1=document.getElementById("stdname");
check1.addEventListener("focusout",()=>{
    let check2=document.getElementById("stdname").value;
    if(check2=="" || check2>0)
    {
        document.getElementById("span1").style.color="red"
        document.getElementById("span1").style.display="block";
        document.getElementById("span1").textContent="*Enter valid name"   
    }
    else{
        document.getElementById("span1").style.display="block";
        document.getElementById("span1").style.color="green"
        document.getElementById("span1").textContent="valid name"
    }
})

let check3=document.getElementById("email");
check3.addEventListener("focusout",()=>{
    let check4=document.getElementById("email").value;
    if(check4=="")
    {
        document.getElementById("span2").style.color="red"
        document.getElementById("span2").style.display="block";   
    }
    else{
        document.getElementById("span2").style.color="green"
        document.getElementById("span2").textContent="valid";
        document.getElementById("span2").style.display="block";

    }
})

let check5=document.getElementById("pass");
check5.addEventListener("focusout",()=>{
    let check6=document.getElementById("pass").value;
    if(check6=="")
    {
        document.getElementById("span3").style.display="block";
    }
    else{
        document.getElementById("span3").style.display="none";
    }
})

let check7=document.getElementById("repass");
check7.addEventListener("focusout",()=>{
    let check8=document.getElementById("repass").value;
    if(check8=="")
    {
        document.getElementById("span4").style.display="block";
    }
    else{
        let a=document.getElementById("pass").value;
        let b=document.getElementById("repass").value;
        if(a==b)
        {
            document.getElementById("span4").textContent="password match";
            document.getElementById("span4").style.color="green";
            document.getElementById("span4").style.display="block";
        }
        else{
            document.getElementById("span4").textContent="*password mis match";
            document.getElementById("span4").style.color="red";
            document.getElementById("span4").style.display="block";
        }
    }
})

let click1=document.getElementById("but01");
click1.addEventListener("click",()=>{
    let one=document.getElementById("stdname").value;
    let two=document.getElementById("email").value;
    let three=document.getElementById("pass").value;
    let four=document.getElementById("repass").value;
    if(one=="" || two=="" || three=="" || four=="")
    {
        if(one=="")
        {
            document.getElementById("span1").textContent="*please fill this";
            document.getElementById("span1").style.color="red";
            document.getElementById("span1").style.display="block"; 
        }
        else if(two=="")
        {
            document.getElementById("span2").textContent="please fill this";
            document.getElementById("span2").style.color="red";
            document.getElementById("span2").style.display="block";
        }
        else if (three=="") {
            document.getElementById("span3").textContent="please fill this";
            document.getElementById("span3").style.color="red";
            document.getElementById("span3").style.display="block";
        } else {
            document.getElementById("span4").textContent="please fill this";
            document.getElementById("span4").style.color="red";
            document.getElementById("span4").style.display="block";
        }
    }
    else{
        let a=document.getElementById("pass").value;
        let b=document.getElementById("repass").value;
        if(a==b)
        {
            document.getElementById("span4").textContent="password match";
            document.getElementById("span4").style.color="green";
            document.getElementById("span4").style.display="block";
            alert("Sign-up Done => Go to Login");
            location.reload();
        }
        else{
            document.getElementById("span4").textContent="*password mis match";
            document.getElementById("span4").style.color="red";
            document.getElementById("span4").style.display="block";
        }
    }
})