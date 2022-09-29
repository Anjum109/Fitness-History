import React, { useEffect, useState } from 'react';
import AutohideExample from '../AutohideExample/AutohideExample';



import { addToDb, getStoredTime } from '../../Utilities/db';
import './Cart.css'



const Cart = (props) => {
    const { cart } = props;


    const [leisure, setLeisure] = useState([]);

    useEffect(() => {
        const storedBreakTime = getStoredTime();
        const savedBreakTime = [];
        for (const e in storedBreakTime) {
            savedBreakTime.push(e);

            setLeisure(savedBreakTime);
        }
    }, []);

    const handleBreak = (e) => {
        setLeisure(e.target.value);
        addToDb(e.target.value);
    }

    let totalTime = 0;
    for (const card of cart) {
        totalTime = totalTime + card.time;
    }

    return (
        <div>
            <div>
                <h4>Exercise Details</h4>
                <h3>Add A Break</h3>
                <div className='btn-list'>
                    <input className='btn-time' onClick={handleBreak} type="button" value="10s" />
                    <input className='btn-time' onClick={handleBreak} type="button" value="20s" />
                    <input className='btn-time' onClick={handleBreak} type="button" value="30s" />
                    <input className='btn-time' onClick={handleBreak} type="button" value="40s" />
                    <input className='btn-time' onClick={handleBreak} type="button" value="50s" />
                </div>

                <p className='exercise-time'><span className='exercise-time-name'>Exercise Time:</span> {totalTime} seconds</p>

                <p className='break-time'><span className='exercise-time-name'>Break Time: </span> {leisure}</p>

            </div>
            {/* toast messe start */}
            <AutohideExample></AutohideExample>
            {/* toast msg end  */}
        </div>
    );
};

export default Cart;