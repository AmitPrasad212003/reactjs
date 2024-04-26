let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert("i was fucked ooyayy!!")
//     document.querySelector(".box").innerHTML=
//     "<b>Yayy you were clicked</b>"
// })
// button.addEventListener("dblclick", ()=>{
//     // alert("i was fucked ooyayy!!")
//     document.querySelector(".box").innerHTML=
//     "<b>Yayy you were clicked</b>"
// })
button.addEventListener("contextmenu", ()=>{
    // alert("i was fucked ooyayy!!")
    document.querySelector(".box").innerHTML=
    "<b>Yayy you were clicked</b>"
})
// button.addEventListener("keydown", ()=>{
//     // alert("i was fucked ooyayy!!")
//     document.querySelector(".box").innerHTML=
//     "<b>Yayy you were clicked</b>"
// })
 
document.addEventListener("keydown",(e)=>{
    console.log(e,e.key , e.keyCode)
})