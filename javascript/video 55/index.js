console.log("Hello I an Conditonal tutorial.")



let age=334;
// let grace=2;
// console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age**grace);
// console.log(age%grace);
if(age>=18){
    console.log("You can Drive..");
}
else if(age==0)
{
    console.log("Are you Chutiya");
}
else{
    console.log("You cannot Drive.. ja ki nuni hila");
    
}

let a=7;
let b=6;
let c= a>b ? (a+b):(b-a);
console.log(c);

// tarnslate to : 
if(a>b){
    let c=a+b;
}
else{
    let c=a-b;
}