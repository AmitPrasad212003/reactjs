function createcard (title, cname,views,monthsold,duration,thumbnail){

    let viewstr
    if(views<1000){
         viewstr = views;
    }
    else if(views>1000000){
         viewstr = views/1000000 + "M";
    }
    else{
        viewstr = views/1000 + "K"
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cname} . ${viewstr} views . ${monthsold} months ago</p>
    </div>

</div>`


document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createcard("Introduction to Backend | Sigma web Dev video #3","codewithAmit",560,7,"24:05","https://i.ytimg.com/vi/-WN74rN9OPI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBVDSpBHWRaSa7FxWtkfYRLHNDRNQ")
