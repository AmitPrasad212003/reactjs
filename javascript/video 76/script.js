// async function getdata(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(450)
//         }, 3500);
//     })

// }
async function getdata(){
    
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   return 455
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
    // console.log(data)
    // return 455


}
async function main(){

console.log("Loading the modeles");

console.log("do something the modeles");

console.log("load data modeles");

let data =  await  getdata()

console.log(data);

console.log("process date")

console.log("task 2")
}

main()


// data.then((v)=>{
//     console.log(data);
//     console.log("process date")
//     console.log("task 2")
    
// })

