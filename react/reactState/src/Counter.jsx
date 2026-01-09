import { useState } from "react";

function init(){
    console.log("init was executed");
    return Math.random();
    
}

export default function Counter(){
    let [count, setCount] = useState(init ); 
    console.log("component was re-render ");
    
    function inCount(){
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        // console.log(count);
        // setCount(25);
    }
    
    return (
        <div>
            <h4>Count = {count}</h4>
            <button onClick={inCount }>Increase Count</button>
        </div>
    )
}