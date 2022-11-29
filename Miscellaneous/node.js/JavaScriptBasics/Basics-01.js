//outdated syntax
var name = "Mega";
console.log("Hello " + name);

function sayHello(name){
    if(name === "Mega"){
        console.log("MNK");
    }
    return "Hello " + name; 
}

console.log(sayHello("Mega"));

//new syntax
let age = 20;
age += 1
console.log(age);

const gender = "F";
console.log(gender);
try{
    gender = "M";
    throw new Error("Cannot change constant");
}catch(err){
    console.log(err);
}

