import { useState, useEffect } from "react"

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let inCountx = () => {
        setCountx((currCount) => currCount + 1);
    };
    let inCounty = () => {
        setCounty((currCount) => currCount + 1);
    };

    useEffect(function prinSomething() {
        console.log("This is side-effect");
        
    }, [countx])

    return (
        <div>
            <h3>CounterX = {countx} </h3>
            <button onClick={inCountx}>+1</button>
            <br /><br />
            <h3>CounterY = {county} </h3>
            <button onClick={inCounty}>+1</button>
        </div>
    );
};