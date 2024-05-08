import React from "react";
import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevcount => prevcount + 1);
    }

    const handleDecrement = () => {
        setCount(prevcount => prevcount - 1);
    }


    return(
        <div>
            <h1>Counter App</h1>
            <h4>Count: {count}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div> 
    );
}