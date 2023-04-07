const hobbies = ['Sports', 'Cooking'];

//spread operator
const copiedArray1 = [...hobbies];
console.log(copiedArray1);

const copiedArray2 = hobbies.slice();
console.log(copiedArray2);

if(copiedArray1 === copiedArray2 || copiedArray1 === hobbies){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

//rest operator
const toArray = (...args) => {
    console.log(args[1]);
    return args;
}
console.log(toArray(1, 2, 3, 4));