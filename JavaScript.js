/*var fname = prompt ('what is your name');

var con= confirm("confirm!");
if (con == true) {
     alert(`welcome ${fname}`);
    document.write(`<h1>Hello ${fname}</h1>`);
    var age = newFunction();
} else {
    fname = prompt ('what is your name');
    var age = newFunction();
}
var isadult = true;
if(age >=20){
    console.log(`${fname} ,is adult , ${isadult}`)
}
else {
    isadult = false;
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

var number = prompt("what is the number of flower bouquet you want ");
var result = '';
for(var i=0;i<number;i++){
result = result + photo ;

}

document.write(result);*/

whatIsYourName();
var fname = "";
function whatIsYourName(){
     fname = prompt ('what is your name');

    var con= confirm("confirm!");
if (con == true) {
     alert(`welcome ${fname}`);
    document.write(`<h1>Hello ${fname}</h1>`);
    var age = newFunction();
}else{
    fname = prompt ('what is your name');
    var age = newFunction();
}
var isadult = true;
if(age >=20){
    console.log(`${fname} ,is adult , ${isadult}`)
}
else {
    isadult = false;
    console.log(`${fname} , is adult  ${isadult}`)
}
theOrder();
}

function newFunction() {
    return prompt(`${fname} what is your age`);
}

function theOrder(){
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
    
    var number = prompt("what is the number of flower bouquet you want ");
    var result = '';
    for(var i=0;i<number;i++){
    result = result + photo ;
    
    }
    
    document.write(result);

}