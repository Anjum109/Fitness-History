import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import image from '../images/lubaba.jpg'

import './Fitness.css'

const Fitness = () => {
    const [fitnessInfo, setFitnessInfo] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fitnessdetails.json')
            .then(res => res.json())
            .then(data => setFitnessInfo(data))
    }, []);

    const handleAddTime = (card) => {
        // console.log(card);
        const newCart = [...cart, card];
        setCart(newCart);
    }

    return (
        <div className='fitness-container'>

            <div className='fitness-fill'>
                <h1>Fitness History</h1>
                <p>Select today’s exercise</p>
                <div className="card-container">
                    {
                        fitnessInfo.map(card => <Card key={card.id}
                            card={card}
                            handleAddTime={handleAddTime}
                        ></Card>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <div className='my-image'>
                    <img src={image} alt="" />
                    <div>
                        <h5>Lubaba Anjum</h5>
                        <p>Location: Bangladesh</p>
                    </div>
                </div>
                <div className='my-fitness'>
                    <div className='my-fitness-info'>55 <small>Kg</small><span className='font'> weight</span></div>
                    <div className='my-fitness-info'>5.4 <span className='font'> Height</span></div>
                    <div className='my-fitness-info'>25<small> Yrs</small><span className='font'> age</span></div>
                </div>
                <h3>Add A Break</h3>
                <div className='btn-list'>
                    <input className='btn-time' type="button" value="10s" />
                    <input className='btn-time' type="button" value="20s" />
                    <input className='btn-time' type="button" value="30s" />
                    <input className='btn-time' type="button" value="40s" />
                    <input className='btn-time' type="button" value="50s" />
                </div>

                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Fitness;