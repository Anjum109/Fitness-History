import React from 'react';

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

                <p>Exercise Time: {totalTime} seconds</p>
            </div>
        </div>
    );
};

export default Cart;