console.log(document)

// let doc = document.createElement("div")

// console.log(doc)
// document.body.append(doc)

// doc.style.border = "1px solid black"

// let word = "javascript"

// doc.textContent = `this is ${word}`

// let para1 = document.createElement("p")
// doc.appendChild(para1)

// para1.textContent = "this is paragraph1"
// para1.style.border = "1px solid black"

// let para2 = document.createElement("p")
// doc.appendChild(para2)

// para2.textContent = "this is paragraph2"
// para2.style.border = "1px solid black"

// //WAY TO SET ATTRIBUDES

// para2.setAttribute("id","paragraph2")
// document.getElementById("paragraph2").style.backgroundColor = "lightgray"

// para1.id = "paragraph1"
// document.getElementById("paragraph1").style.backgroundColor = "lightblue"

//TASK--1

// let Ename = prompt("Enter name") 

// let mydiv = document.createElement("div")

// document.body.append(mydiv)
// mydiv.style.border = "1px solid black"
// mydiv.style.backgroundColor = "grey"


// let head1 = document.createElement("h1")
// mydiv.appendChild(head1)
// head1.textContent = ` Ename : ${("Ename")}`

// let Location = prompt("Enter location")

// let head2 = document.createElement("h1")
// mydiv.appendChild(head2)
// head2.textContent = ` location : ${("Location")}`

// console.log(document)


//TASK--2

// let listname = document.createElement("ol")
// document.body.append(listname)

// let pop = Number(prompt("Enter list number"))

// for(i=0;i<3;i++){

//     let li = document.createElement("li")
//     let content = li.textContent = prompt("Enter animal" + (i+1))

//     if(content==" "){
//         i--;
//     }
//     else{
//         listname.appendChild(li); 
//     }

//}



//TAsk---3

let etable = document.createElement("table")
document.body.append(etable)
etable.style.border = "1px solid black"

let ehead = document.createElement("thead")
etable.appendChild(ehead)

let row1 = document.createElement("tr")
ehead.appendChild(row1)

let heading1 = document.createElement("th")
row1.appendChild(heading1)
heading1.textContent = "S.No"
heading1.style.border = "1px solid black"


let heading2 = document.createElement("th")
row1.appendChild(heading2)
heading2.textContent = "EName"
heading2.style.border = "1px solid black"

let heading3 = document.createElement("th")
row1.appendChild(heading3)
heading3.textContent = "Location"
heading3.style.border = "1px solid black"



let ebody = document.createElement("tbody")
etable.appendChild(ebody)

let repeat=true;
while(repeat)
{
    let item=Number(prompt("Enter No. of.Employee list"));
    if(!item=="" || item==String)
    {
        repeat=false;
    }

for(i=1;i<=item;i++){
    let trow = document.createElement("tr")
    ebody.appendChild(trow)
    trow.style.border = "1px solid black"

    for(j=1;j<=3;j++){

    let td = document.createElement("td");
    td.style.border = "1px solid black"
            if(j==1)
            {
                td.textContent = i;
                trow.appendChild(td)
            }
            else if(j==2)
            {
                let content=td.textContent=prompt(`Enter the Name of Employee ${i}`)
                if(!isNaN(content) || content===null){
                    j--;
                }
                else{
                    trow.appendChild(td)
                }
            }
            else{
                let content=td.textContent=prompt(`Enter the Location of Employee ${i}`)
                if(!isNaN(content) || content===null){
                    j--;
                }
                else{
                    trow.appendChild(td)
                }
            }
        }
   }
}






