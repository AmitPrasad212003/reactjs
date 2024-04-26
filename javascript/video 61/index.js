// create a faulty calsulator using javascript 

// THis Faulty calculator does following :
// 1. it takes two number as input from the user 
// 2. It perfroms wrong operation as follows:

// + ---> -
// * ---> +
// - ---> /
// / ---> **

// it perfroms wrong opertion 10* of the times


let random = Math.random();
let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter Operation : ");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",

}
console.log(random);
if (random> 0.1) {
    // Perfrom correct Calculation

    alert(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // Perfrom Wrong Calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}