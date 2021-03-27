/*
alert("alert!");
confirm("confirmation");
prompt("prompt");
*/
//accessing values from prompt
/*
var x=prompt("enter your name");
document.write(x);
*/
/*x=parseInt(prompt("enter a value"));
y=parseInt(prompt("enter second value"));
result=x+y;
alert("result is ="+result);*/
/*
a=prompt("enter your name");
document.write("<h1>Hello</h1>"+a);*/


//document.getElementById("demo").innerHTML=prompt("enter");

//sample-work4:
/*
var a=10;
document.write("<h1><span id='demo'></span></h1>");
document.getElementById("demo").innerHTML=a;


function myFunction(){
	var a=5;
	document.write('<h1>'+a);
	
}
myFunction();
document.write('<h1>'+a);
*/

/*
function change(){
	
	document.getElementById("demo").innerHTML="ORISYS";
}
*/
/*
function change(){
	var a=document.getElementById("demo").value;
	var b=document.getElementById("demo1").value;
	alert("your name is "+a+" "+b);
}

*/
/* ARRAY SECTION
var a=['mango','apple','orange'];
document.write('<h1>'+a+'<h1>');
document.write('<h1>'+a[1]+'</h1>');
a.push('pineapple');
document.write('<h1>'+a+'</h1>');
a.pop();
document.write('<h1>'+a+'</h1>');
a.unshift();
document.write('<h1>'+a+'</h1>');
a.push('pineapple');
a.shift();
document.write('<h1>'+a+'</h1>');
for(var i=0;i<a.length;i++)
{
	document.write('<h1>'+a[i]+'</h1>');
}
*/
/* RADIO SELECT
function action(){
	var rd1=document.getElementById("rd1");
	
	var rd2=document.getElementById("rd2");
	if(rd1.checked==true)
	{
		alert("you selected" +rd1.value);
	}
	else if(rd2.checked==true){
		alert("you selected" +rd2.value);
		
	}
	else{
		alert("you selected none");
	}
}
*/

/*
function myfun()
{
	var select=document.getElementById("selectbox");
	alert(select.options[select.selectedIndex].value);
	
}
*/

/*
function myfun1()
{
	var para=document.getElementsByTagName("p");
	for(var i=0;i<para.length;i++)
	{
		para[i].style.color="red";
	}
}
*/

/*
function myfun2(){
	var para=document.getElementsByClassName("color");
	for(var i=0;i<para.length;i++)
	{
		para[i].style.color="red";
	}
}
*/

function mouseover(){
	
	var a=document.getElementById("img1").src="img/2.jpg";
}
function mouseout(){
	var a=document.getElementById("img1").src="img/3.jpg";
}



