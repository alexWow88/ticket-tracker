import React, {useState} from 'react'
import "./Counter.scss"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
      setCounter(counter+1);
    }
  
    const handleDecrement = () => {
      setCounter(counter-1);
    }

    return (
        <div className="counter">
            <h3>Counter</h3>
            <h3>{counter}</h3>
            <div className="counter__btns">
                <button className="counter__btns__btn" onClick={handleDecrement}>-</button>
                <button className="counter__btns__btn" onClick={handleIncrement}>+</button>
            </div>   
        </div>
    )
}

export default Counter
