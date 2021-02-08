
 
 
 
var fname = prompt ('what is your name');
//document.write(' Hello ${name}');
//var age = alert('what is your age' );


var con= confirm("confirm!");
if (con == true) {
    // console.log("test")
    alert(`welcome ${fname}`);
    // alert(`welcome ${fname}`);
    document.write(`<h1>Hello ${fname}</h1>`);
    var age = newFunction();
} else {
    fname = prompt ('what is your name');
    var age = newFunction();
}
var isadult = true;
if(age >=20){
    //document.write(`${fname} ,is adult , ${isadult}`);
    console.log(`${fname} ,is adult , ${isadult}`)
}
else {
    isadult = false;
    //document.write('${fname} , is adult , ${isadult}');
    console.log(`${fname} , is adult  ${isadult}`)
}

function newFunction() {
    return prompt(`${fname} what is your age`);
}



var order = prompt("what do you whant to order white flower or the red one (you must type 'red' or 'white' just)?")


while(order != "white" && order != "red") {
    order = prompt("what do you whant to order white flower or the red one (you must type 'red' or 'white' just)?")
};

var photo = "";

if(order=="red"){
photo = `<img src="img/red.jpg">`
}

if(order=="white"){
photo = `<img width="1500px" hight="500" src="img/white2.jpg">`
}
//document.write ="test";
var number = prompt("what is the number of flower bouquet you want ");
var result = '';
for(var i=0;i<number;i++){
result = result + photo ;

}

document.write(result);