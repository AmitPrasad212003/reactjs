import { useState } from "react";

export default function ludoBoard(){
    let [moves, setMoves] = useState({blue:0, red:0, green:0, yellow:0});
    let [arr, setArr ] = useState(["no moves"]);

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, blue : prevMoves.blue + 1}
        }); 

       
        setArr((prevArr) => {
            return [...prevArr, "blue moves"];
        });

    }
    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow : prevMoves.yellow + 1}
        }); 
    }
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green : prevMoves.green + 1}
        }); 
    }
    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red : prevMoves.red + 1}
        }); 
    }
    return(
        <div>
            <p>Game Begins!</p>
            <div>
                <p >Blue move = {moves.blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p >Yellow move = {moves.yellow}</p>
                <button style={{backgroundColor : "yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p >Green move = {moves.green}</p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
                <p >Red move = {moves.red}</p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}