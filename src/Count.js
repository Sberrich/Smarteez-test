
import React, { useState } from 'react';


// Counter Component
function Count() {

    // Counter state
    const [counter, setCounter] = useState(0);

    // increase handler
    const increase = () => {
        setCounter(counter + 1);
    };

    //decrease handler
    const decrease = () => {

        setCounter(counter - 1);
    };

    return (
        <div className="app">


            <div className="buttons">

                <div>
                    {/* decrase button */}
                    <button className='btn-decrease' onClick={() => decrease()}>-</button>
                </div>
                {/* check if the counter > 0 or < 0 then change the color  */}
                <div className={`counter-value ${counter > 0 ? 'counter-value-increase' : ''} ${counter < 0 ? 'counter-value-decrease' : ''}`}>
                    <strong>{counter}</strong>
                </div>
                <div>
                    {/* increase button */}
                    <button className='btn-increase' onClick={() => increase()}>+</button>
                </div>

            </div>
        </div>
    );
}

export default Count;
