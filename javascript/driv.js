let a= ("hey whats ur age");
a=Number.parseInt(a);// converting string to number
if(a>0){
    alert("too small");
}
else if(a<9){
    alert("ur kid");
}
else if(a<18 && a>=9){
    alert("ur eligible");
}
else{
    alert("this is invalid age")
}