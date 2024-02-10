import React from 'react';
import './Card.css';

const Card = ({ photo, price, rate, address, contact, location }) => {
  return (
   <div className='cards'>
         <div className='card'>
      <img src={photo} alt='Service' className='card-image' />
      <div className='card-details'>
        <div className='price-rate'>
          <span className='price secondaryText'>{price}</span>
          <span className='rate' style={{color:"orange"}}>{rate}</span>
        </div>
        <p className='address secondaryText'>{address}</p>
        <p className='contact '>{contact}</p>
        <p className='location'>{location}</p>
      </div>
    </div>
   </div>
  );
};

export default Card;
