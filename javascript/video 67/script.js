console.log("Hello world ")
console.log(document.body)
console.log(document.body.childNodes)



// script.js:1 Hello world 
// script.js:2 <body>​…​</body>​
// script.js:3 NodeList(4) [text, div.container, text, script]0: textassignedSlot: nullbaseURI: "http://192.168.0.119:3000/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: div.containernextSibling: div.containernodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text1: div.container2: text3: script4: textlength: 5[[Prototype]]: NodeList
// docum
// VM273:1 Uncaught ReferenceError: docum is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM273:1
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​
// document.body.childNodes[1].childNodes

// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let amit = document.body.childNodes[1]
// undefined
// amit
// <div class=​"container">​…​</div>​
// amit.first
// undefined
// amit.firstChild
// #text
// amit.lastChild
// #text
// amit.childNodes.[2]
// VM744:1 Uncaught SyntaxError: Unexpected token '['
// amit.childNodes[3]
// <div class=​"box">​Box2​</div>​
// amit.firstElementChild
// <div class=​"box">​Box1​</div>​
// amit.Elem
// undefined
// amit.lastElementChild
// <div class=​"box">​Box5​</div>​
// amit.lastElementChild.style.color="red";
// 'red'
// amit.lastElementChild.style.backgroundcolor="green";

// 'green'
// amit.lastElementChild.style.backgroundcolor="aqua";

// 'aqua'


// amit.lastElementChild
// <div class=​"box">​Box5​</div>​
// amit.lastElementChild.style.backgroundColor="green";
// 'green'
// amit.lastElementChild.parentElement
// <div class=​"container">​…​</div>​



console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[0])
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[4])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].previousSibling)

console.log(document.body.children)