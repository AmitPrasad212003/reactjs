console.log('Let strat java script');

async function getSongs(){
let a = await fetch("http://192.168.0.119:3000/Songs/")
let response = await a.text();


let div = document.createElement("div")
div.innerHTML = response;
let as = div.getElementsByTagName("a")

let songs =[]
for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href.split("/Songs/")[1])
    }
    
}
return songs
}


async function main() {

    let currentSoong;
    // get the list of all songs
    let songs= await getSongs()

// show all the songs in the playlist
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML+ `<li> 
        
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20", " ")}</div>
            <div>Amit</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="play.svg" alt="">
        </div></li>`;
    }

//Attach an event listerner to each song

Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    console.log(e.target.getElementsByTagName("div")[0]);
    
})
    
}    
 

main()

