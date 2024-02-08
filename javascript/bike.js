let sub = document.getElementById("but");
let num = 1;
let M = document.getElementById("tab")
M.style.display = "display";
M.style.border = "1px solid black"
sub.addEventListener("click",()=>{
        let row = document.createElement("tr");
        document.getElementById("tb").appendChild(row);
        row.style.border = "1px solid black"
        let col1 = document.createElement("td");
        row.appendChild(col1);
        col1.style.border = "1px solid black"
        col1.textContent = num
        num = num + 1;        
        let col2 = document.createElement("td");
        row.appendChild(col2);
        col2.style.border = "1px solid black"
        col2.textContent = document.getElementById("name").value ;
        let col3 = document.createElement("td");
        row.appendChild(col3); 
        col3.style.border = "1px solid black"
        col3.textContent = document.getElementById("bike").value ;
        let col4 = document.createElement("td");
        row.appendChild(col4);
        col4.style.border = "1px solid black"
        col4.textContent = document.getElementById("in").value ;
        let col5 = document.createElement("td");
        row.appendChild(col5);
        col5.style.border = "1px solid black"
        col5.textContent = document.getElementById("out").value ;
        document.getElementById("name").value = "";
        document.getElementById("bike").value = "";
        document.getElementById("in").value = "";
        document.getElementById("out").value = "";
})
