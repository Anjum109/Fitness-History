import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let totalTime = 0;
    for (const card of cart) {
        totalTime = totalTime + card.time;
    }

    return (
        <div>
            <div>
                <h4>Exercise Details</h4>

                <p className='exercise-time'><span className='exercise-time-name'>Exercise Time:</span> {totalTime} seconds</p>
            </div>
        </div>
    );
};

export default Cart;