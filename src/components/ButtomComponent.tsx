import React, {useState} from "react";

export default function(){
    const [count, setCount] = useState(0)

    const increaseCount = () => setCount(count+1)
    const decreaseCount = () => setCount(count-1)
    return(
        <div>

            <p> You clicked {count} times!</p>
            <button onClick={increaseCount}>
                Click me pls
            </button>
            <button onClick={decreaseCount}>
                try me!
            </button>
        </div>
    )


}
