import React from 'react'
import "./Counter.scss"

const Counter = () => {

// const []

    return (
        <div className="counter">
            <h3>Counter</h3>
            <h3>0</h3>
            <div className="counter__btns">
                <button className="counter__btns__btn">-</button>
                <button className="counter__btns__btn">+</button>
            </div>   
        </div>
    )
}

export default Counter
