
import React, { useState } from 'react';

function Count() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {

        setCounter(counter - 1);
    };

    return (
        <div className="app">


            <div className="buttons">

                <div>
                    <button className='btn-decrease' onClick={() => decrease()}>-</button>
                </div>
                <div className={`counter-value ${counter > 0 ? 'counter-value-increase' : ''} ${counter < 0 ? 'counter-value-decrease' : ''}`}>
                    <strong>{counter}</strong>
                </div>
                <div>
                    <button className='btn-increase' onClick={() => increase()}>+</button>
                </div>

            </div>
        </div>
    );
}

export default Count;
