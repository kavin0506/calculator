
let fstvalue=document.getElementById("firstvalue");
let secvalue=document.getElementById("secondvalue");
let _add=document.getElementById("add");
let _subtract=document.getElementById("subtract");
let _multi=document.getElementById("multi");
let _div=document.getElementById("division");
let _submit=document.getElementById("submit");


function add(a,b){
	console.log(a+b);
}
_add .addEventListener("click",function(){
	let num1=parseInt(fstvalue.value);
	let num2=parseInt(secvalue.value);
	add(num1,num2);
});

function subtract(a,b){

	console.log(a-b);
}
_subtract.addEventListener("click",function(){
	let num1=parseInt(fstvalue.value);
	let num2=parseInt(secvalue.value);
	subtract(num1,num2);
});

function multi(a,b){
	console.log(a*b);
}
_multi.addEventListener("click",function(){
	let num1=parseInt(fstvalue.value);
	let num2=parseInt(secondvalue.value);
	multi(num1,num2);
});
function div(a,b){
	console.log(a/b);
}
_div.addEventListener("click",function(){
	let num1=parseInt(fstvalue.value);
	let num2=parseInt(secvalue.value);
	div(num1,num2);
});