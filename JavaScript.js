 //var favcolor = prompt('what is your fav color');
  var fname = prompt ('what is your name');
//document.write(' Hello ${name}');
//var age = alert('what is your age' );


var con= confirm("confirm!");
if (con == true) {
    console.log("test")
    alert(`welcome ${fname}`)
    // alert(`welcome ${fname}`);
    // document.write(`Hello ${fname}`);
    var age = newFunction();} 
else {
    fname = prompt ('what is your name');
    var age = newFunction();
}
var isadult = true;
if(age >=20){
    //document.write(`${fname} ,is adult , ${isadult}`);
    console.log(`${fname} ,is adult , ${isadult}`)
}
else{
    isadult = false;
    //document.write('${fname} , is adult , ${isadult}');
console.log(`${fname} , is adult  ${isadult}`)
}




function newFunction() {
    return prompt(`${fname} what is your age`);
}

