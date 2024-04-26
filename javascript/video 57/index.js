console.log("Hey My dot notes of finction");

function nice(name) {
    console.log("Hey " +name+ " yoyr are nice");
    console.log("Hey " +name+ " yoyr are madharchod");
    console.log("Hey " +name+ " yoyr are randi");
    console.log("Hey " +name+ " yoyr are Bsdl");
    
}
nice("Gandu");
nice("rapm");
// function sum(a,b) {
//     console.log(a+b);
// }
// sum(5,6);
function sum(a,b ,c = 3) {
    console.log(a,b,c);
    return a+b+c;
    
}

 result = sum(67,56);
 result1 = sum(67,56,34);
 result2 = sum(67);


console.log("The sum of number is : ", result)
console.log("The sum of number is : ", result1)
console.log("The sum of number is : ", result2)


const func1 = (x)=>{
    console.log("I am Arrow Function: ",x);
}
func1(3)
func1(32)
func1(34)