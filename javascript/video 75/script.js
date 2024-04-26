console.log("Harry is a hacker")
console.log("Rohan is a hacker")

setTimeout(()=>{
    console.log("I Am Inside Settimeout")
},3000);
setTimeout(()=>{
    console.log("I Am Inside Settimeout 2")
},0);

console.log("The End") 

const fnc = () => {
    console.log("Nothing")
  
}

const callback =(arg,fn) => {
   console.log(arg)
   fnc();
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("harry",fnc());
    document.head.append(sc)
}

loadScript("https://hindilinks4u.mom/money-hiest-berlin-2023-season-1-hindi-dubbed-netflix-Watch-online-full-movie/", callback)