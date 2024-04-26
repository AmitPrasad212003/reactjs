// let div = document.createElement("div");
// div.innerHTML =" <b>I Have been inserted by Amit </b>"
// div.setAttribute("class","crt");
// document.querySelector(".container").append(div)
// document.querySelector(".container").before(div)
// document.querySelector(".container").after(div)
// document.querySelector(".container").prepend(div)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend"," <b> hey i an helpm helpn nidnvue  </b>")
cont.insertAdjacentHTML("afterbegin"," <b> hey i an helpm helpn nidnvue  </b>")
cont.insertAdjacentHTML("beforebegin"," <b> hey i an helpm helpn nidnvue  </b>")
cont.insertAdjacentHTML("beforeend"," <b> hey i an helpm helpn nidnvue  </b>")
