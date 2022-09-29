import React from 'react';
import './Card.css'

const Card = (props) => {
    const { handleAddTime, card } = props;
    const { img, name, time, age } = props.card;


    return (
        <div className='fitness-card'>
            <img src={img} alt="" ></img>
            <div className='info'>
                <p className='fitness-name'>{name}</p>
                <p>For age: {age}</p>
                <p>Time Required: {time}s</p>
            </div>
            <button onClick={() => handleAddTime(card)} className='card-btn'>Add To List</button>
        </div>
    );
};

export default Card;