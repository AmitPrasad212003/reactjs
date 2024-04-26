let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    // let c = arr.slice(1,).reduce((a,b)=>{
    //     return a*b
    // })
    // console.log(c)
    // shortcut
    let c = arr.slice(1,).reduce((a,b)=>a*b)
    return c

}
console.log(factorial(a));


function factfor(number){
    let factfor=1;

    for (let index = 1; index <=number; index++) {
        factfor =factfor* index
    }
    return factfor
}

console.log(factfor(a))