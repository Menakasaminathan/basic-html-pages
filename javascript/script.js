// console.log(window.document)

// console.log(document.all)

// let mydiv = document.getElementById("parent")
// console.log(mydiv)

// mydiv.style.backgroundColor = "lightblue"
// mydiv.style.border = " 1px solid black"

// let para = document.getElementsByClassName("para")
// console.log(para)
// console.log(para.length)

// for(i=0; i<para.length; i++){

// para[i].style.backgroundColor = "lightgrey"

// }

// let li = document.getElementsByTagName("li")

// console.log(li)
// for(i=0; i<li.length;i++){
//     li[i].textContent = " This is My Form"
//     li[i].style.backgroundColor = "lightgreen"
// }

//CSS SELECTOR

// let mydiv = document.querySelector("#parent")
// console.log(mydiv)
// mydiv.style.backgroundColor = "purple"

// let names = document.querySelectorAll(".para")
// console.log(names)

// let list = document.querySelectorAll("#ullist li")
// console.log(list)

//PROPERTIES OF DOM

//let mydiv = document.getElementById("parent")
//console.log(mydiv)
//mydiv.firstChild.textContent = "this is fisst child"

//mydiv.firstElementChild.textContent = "this is first element child"

//mydiv.lastChild.textContent = "this is last child"

//mydiv.lastElementChild.textContent = "this is last element child"

//mydiv.children[1].style.backgroundColor= "lightblue"

//mydiv.parentElement.style.backgroundColor = "lightpink"

//mydiv.nextElementSibling.textContent = "nextelementsibling"

// mydiv.nextSibling.textContent = "nextsibling"

// mydiv.previousSibling.textContent = "pervioussibling"

// mydiv.previousElementSibling.textContent = "previouselementsibling"

//TASK-1

let paragraph = document.getElementById("para2")
console.log(paragraph)
paragraph.parentElement.nextElementSibling.style.backgroundColor = "red"