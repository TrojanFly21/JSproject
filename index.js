let a;
let b;
let c;

document.getElementById("add").onclick=function(){

    a=parseInt(document.getElementById("num1").value);
   
    b=parseInt(document.getElementById("num2").value);
     c=a+b;
     document.getElementById("result").value=c;
}
document.getElementById("sub").onclick=function(){

    a=parseInt(document.getElementById("num1").value);
   
    b=parseInt(document.getElementById("num2").value);
     c=a-b;
     document.getElementById("result").value=c;
}
document.getElementById("mul").onclick=function(){

    a=parseInt(document.getElementById("num1").value);
   
    b=parseInt(document.getElementById("num2").value);
     c=a*b;
     document.getElementById("result").value=c;
}
document.getElementById("div").onclick=function(){

    a=parseInt(document.getElementById("num1").value);
   
    b=parseInt(document.getElementById("num2").value);
     c=a/b;
     document.getElementById("result").value=c;
}