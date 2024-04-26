console.log("Amit")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor="green"

// document.querySelector(".box").style.backgroundColor="aqua" 
// only select first box


console.log(document.querySelectorAll(".box"))


document.querySelectorAll(".box").forEach(e =>{
    // console.log(e)
    e.style.backgroundColor = "AQua";
})

let diev= document.getElementsByTagName("div")
console.log(diev)
console.log(diev[3].matches("#redbox"))
console.log(diev[4].matches("#redbox"))
console.log(diev[3].closest("#redbox"))
console.log(diev[3].closest(".container"))
console.log(diev[4].closest("#redbox"))

console.log(document.querySelector(".container").contains(diev[2]))
console.log(document.querySelector(".container").contains(diev[0]))


console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))

