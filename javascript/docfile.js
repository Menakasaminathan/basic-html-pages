let header=document.createElement("header");
document.body.append(header);

let h1=document.createElement("h1");
header.appendChild(h1);
h1.textContent="HEADING : TRAVELLING"
h1.style.textAlign="center";
h1.style.fontSize = "40px"

let nav=document.createElement("nav")
document.body.append(nav);
nav.style.paddingBottom="20px"
nav.style.lineHeight="50px"

let a=document.createElement("a");
nav.appendChild(a);
a.textContent="Home";
a.style.leftmargin="0px"
a.style.paddingRight="50px"


let a1=document.createElement("a");
nav.appendChild(a1);
a1.textContent="Contact";
a1.style.paddingLeft="160px"
a1.style.paddingRight="50px"

let a2=document.createElement("a");
nav.appendChild(a2);
a2.textContent="About";
a2.style.paddingLeft="160px"
a2.style.paddingRight="50px"

let a3=document.createElement("a");
nav.appendChild(a3);
a3.textContent="Gallery";
a3.style.paddingLeft="160px"
a3.style.paddingRight="50px"


let a4=document.createElement("a");
nav.appendChild(a4);
a4.textContent="Register";
a4.style.paddingLeft="160px"
a4.style.paddingRight="50px"


let main=document.createElement("main")
document.body.append(main);
main.style.display="flex";

let div1=document.createElement("div");
main.appendChild(div1);
div1.style.flex="1";
div1.style.leftmargin="0px"
div1.style.height="65vh"
div1.style.backgroundColor="lightblue";
div1.textContent = "Traveling is an extraordinary experience that opens up new horizons, broadens our perspectives, and allows us to connect with the world in a unique way. Whether it’s exploring vibrant cities, immersing ourselves in different cultures, or discovering awe-inspiring landscapes, travel has a profound impact on our lives. In this article, we will delve into the reasons why traveling is so important and how it can enrich our lives."
div1.style.fontSize="20px".lineHeight="40px"


let v=document.createElement("video")
main.appendChild(v);
v.style.flex="1";
v.setAttribute("src","../../image/WhatsApp Video 2024-01-25 at 6.42.58 PM.mp4");
v.setAttribute("width", "520");
v.setAttribute("height", "474");
v.setAttribute("controls", "controls");



let footer=document.createElement("footer")
document.body.append(footer);

footer.textContent="Thankyou";
footer.style.textAlign="center";
footer.style.lineHeight="85px";
footer.style.fontSize="40px"