let a = prompt("Enter first number")
let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

// try {
//     console.log("The sum be : ", sum*x);
    
// } catch (error) {
//     console.log("Error Aa gaya Bhai");
    
// }


function main(){
    let x = 1
    try {
        console.log("The sum be : ", sum*x);
        return true
    } catch (error) {
        console.log("Error Aa gaya Bhai");
        return false
    }
    finally{
        console.log("Files are closed and db connection is being closed");
        
    }
}
let c = main()