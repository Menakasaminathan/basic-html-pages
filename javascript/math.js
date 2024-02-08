let division = document.getElementById("divi")
division.style.display = "none"
let button = document.getElementById("but")
button.addEventListener("click", ()=>{
    let division = document.getElementById("divi")
    location.reload()
})

let add = document.getElementById("add");
add.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value ;
    let result = Number(num1) + Number(num2);document.getElementById("head1").textContent = `sum of ${num1} + ${num2} = ${result}`;
    let division = document.getElementById("divi").style.display="block";

})
let sub = document.getElementById("sub");
sub.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value ;
    let result = Number(num1) - Number(num2);document.getElementById("head2").textContent = `sub of ${num1} - ${num2} = ${result}`;
    let division = document.getElementById("divi").style.display="block";

})

let div = document.getElementById("div");
div.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value ;
    let result = Number(num1) / Number(num2);document.getElementById("head3").textContent = `div of ${num1} / ${num2} = ${result}`;
    let division = document.getElementById("divi").style.display="block";

})













<body>
    <div  id="parent">
        <div id="main">
           <h2 id="head">Landing - Page</h2>
              <form action="do" id="item">
                  <label for="name" class="lab">User Name</label>
                  <input type="text" name="name" id="name" class="in">
                  <br><br>

                  <label for="mail" class="lab">User E-mail</label>
                  <input type="text" name="mail" id="mail"  class="in">
                  <br><br>

                  <label for="pass " class="lab">New Password</label>
                  <input type="password" name="pass" id="pass"  class="in">
                  <br><br>

                  <label for="npass" class="lab">Confirm Password</label>
                  <input type="password" name="npass" id="npass"  class="in">
                  <div id="eye"><i class="fa-solid fa-eye"></i>
                  </div>
                  <div id="both"></div>
                  <br><br>
                   <button id="log"><b>SIGNIN</b></button>
              </form>
              <br>
              <a href=".//login.html">Already have an account??Log-in</a>
        </div>
          
    </div>
    <script src="../js/signin.js"></script>
    <script src="https://kit.fontawesome.com/d3a8403c73.js" crossorigin="anonymous"></script>















