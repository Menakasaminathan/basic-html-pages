// function fun(){
//    // alert("This is Message From JavaScript")
//    console.log("Mouse Over")
// }
// function funout(){
//     console.log("Mouse Out")
// }

// function colorchange(){
//     let mydiv = document.getElementById("mydiv");
//     console.log(mydiv)
//     mydiv.style.backgroundColor = "lightblue"
// }


//TASK--1


// function clickbut(){

//     let division = document.createElement("div");
//     document.body.append(division);
//     //division.style.border = "1px solid black"

//     let pop = prompt("Enter the Ename")
//     let pop1  = prompt("Enter the Location")

//      let h1 = document.createElement("h1");
//      h1.textContent = `Ename : ${pop}`;
//      division.appendChild(h1);


//      let h2 = document.createElement("h1");
//      h2.textContent = `Location : ${pop1}`;
//      division.appendChild(h2);


// }

// TASK--2

// let color = "red"

// function clr(){

//     let division = document.getElementById("mydiv")
//     console.log(division)

//     if(color === "red"){
//         color="blue"
//         division.style.backgroundColor = color;
//     }
//     else{
//         color = "red"
//         division.style.backgroundColor = color;

//     }
// }

// TASK--3
        
    let division = document.createElement("div")
    division.style.height = "200px"
    division.style.width = "250px"
    division.style.border = "1px solid black"
    division.style.position = "absolute"
    division.style.display = "none"
    document.body.append(division)

    function cldiv(){
        
        if(division.style.display === "none")
                {
                    division.style.display = "block"
                }
                else
                {
                    division.style.display = "none"
        
                }
}
