import React from 'react';
import './card.component.css';

export const Card = (props) => {
    return(
    <div className='card-container'>
        <img alt='pic of a monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=320x320`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    )
}