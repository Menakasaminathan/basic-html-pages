var name1;
var loc;
let action1=document.getElementById("button1");
action1.addEventListener("click",()=>{
    name1=prompt("Enter Name")
    while(name1=="" || name1>=0)
    {
        name1=prompt("Enter Name")
    }
    loc=prompt("Enter Location")
    while(loc=="" || loc>=0)
    {
        loc=prompt("Enter Location")
    }

    let a=document.createElement("tr");
    document.getElementById("body").appendChild(a);
    let a1=document.createElement("td");
    a.appendChild(a1);
    a.className="row1"
    let number=document.getElementsByTagName("tr").length;
    a1.textContent=number-1;
    let a2=document.createElement("td");
    a.appendChild(a2);
    a2.textContent=name1;
    let a3=document.createElement("td");
    a.appendChild(a3);
    a3.textContent=loc;
    let a4=document.createElement("td");
    a.appendChild(a4);
    let but2=document.createElement("button");
    let but3=document.createElement("button");
    a4.appendChild(but2);
    a4.appendChild(but3);
    but2.textContent="Modify";
    but3.textContent="Delete"; 
    but2.className="modify";
    but3.className="delete";

})

let action2=document.getElementById("tb");
action2.addEventListener("click",(meth)=>{
    let option=meth.target;
    if(option.className==="delete")
    {
        option.parentElement.parentElement.remove();
        let check1=document.getElementsByTagName("tr").length;
        for(i=1;i<=check1;i++)
        {
            document.getElementsByClassName("row1")[i].firstChild.textContent=i;
        }
    }
    else if(option.className==="modify")
    {
        option.parentElement.previousSibling.previousSibling.textContent=prompt(`change the Name = ${name1} into`)
        option.parentElement.previousSibling.textContent=prompt(`change the location = ${loc} to ?`)
    }
})