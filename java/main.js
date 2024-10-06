var allproducts = document.querySelectorAll(".list1 div")
var div1 = document.querySelector("#div1")
var div11 = document.querySelector("#div11")
var div2 = document.querySelector("#div2")
var div22 = document.querySelector("#div22")
var dno = document.querySelector("#no")


var btn1 = document.querySelector("#butnPrice")
var totalprice = 0
var x=0
allproducts.forEach(function(item){
item.onclick = function(){
totalprice += +(item.getAttribute("price"))
x+=1
div1.innerHTML += item.textContent + "/"
div11.innerHTML += item.textContent + " /"


if(div1.innerHTML != " "){
btn1.style.display="block"}
}})
 
btn1.onclick =function(){
div2.innerHTML =totalprice 
dno.style.visibility="visible";

}
