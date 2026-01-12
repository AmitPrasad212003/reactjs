import { useEffect } from "react";
import { useState } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let reponse = await fetch(URL);
        let jsonresponse = await reponse.json();
        
        setJoke({
            setup: jsonresponse.setup, punchline: jsonresponse.punchline
        })
        
    }

    useEffect(() => {
        async function getFirstjoke(){
        let reponse = await fetch(URL);
        let jsonresponse = await reponse.json();
        setJoke({
            setup: jsonresponse.setup, punchline: jsonresponse.punchline
        })
    }
    getFirstjoke();
    }, []);
    return (
        <div>
            <h3>Joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New joke</button>
            
            
        </div>
    )
}