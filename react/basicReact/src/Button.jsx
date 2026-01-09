
function handleClick(event){
    console.log("Hello Bhaiya");
    console.log(event);
    
}

function handleMouseOver(){
    console.log("By by bahiya");
    
}

function handleDblclick(){
    console.log("You handle the doubble Click");
    
}
export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>This part is for Event Demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam repudiandae, maiores aut consequatur nesciunt eligendi consequuntur dolorum placeat molestias saepe illo? Consectetur, cum?</p>
            <button onDoubleClick={handleDblclick}>Duoble Click me!</button>
        </div>
    )
}