import React from 'react';
import './Ourservices.css';
import Card from './Card';

const propertyData = [
  {
    id: 1,
    photo: 'p3.jpg',
    price: '$200,000',
    rate: '4.5/5',
    address: '123 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p2.jpg',
    price: '$200,000',
    rate: '4.5/5',
    address: '124 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p4.jpg',
    price: '$200,000',
    rate: '4.5/5',
    address: '125 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p1.jpg',
    price: '$200,000',
    rate: '4.0/5',
    address: '126 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p5.jpg',
    price: '$200,000',
    rate: '4.5/5',
    address: '127 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p6.jpg',
    price: '$200,000',
    rate: '4.2/5',
    address: '128 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p7.jpg',
    price: '$200,000',
    rate: '4.6/5',
    address: '129 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p8.jpg',
    price: '$2500,000',
    rate: '4.3/5',
    address: '130 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p9.jpg',
    price: '$25500,000',
    rate: '4.4/5',
    address: '131 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p10.jpg',
    price: '$2330,000',
    rate: '4.3/5',
    address: '132 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p11.jpg',
    price: '$220,000',
    rate: '4.4/5',
    address: '133 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p12.jpg',
    price: '$400,000',
    rate: '4.5/5',
    address: '134 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p13.jpg',
    price: '$4200,000',
    rate: '4.2/5',
    address: '135 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p14.jpg',
    price: '$3300,000',
    rate: '4.5/5',
    address: '136 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p15.jpg',
    price: '$800,000',
    rate: '4.5/5',
    address: '137 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p16.jpg',
    price: '$129,000',
    rate: '4.6/5',
    address: '138 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },
  {
    id: 1,
    photo: 'p16.jpg',
    price: '$590,000',
    rate: '4.7/5',
    address: '140 Main Street',
    contact: 'Phone: (123) 456-7890',
    location: 'City, State',
  },

];

export const Ourservices = () => {
  return (
    <div className='ourservices-container'>
      <h1 className='heading '>Our Services</h1>
      <p className='subheading'>Explore the range of services we offer</p>
      <div className='service-info'>
        <div className='service'>
          <h2 className='service-title '>Selling</h2>
          <p className='service-description'>Transforming Ideas into Reality: We specialize in turning your innovative concepts into tangible solutions that drive success..</p>
        </div>
        <div className='service'>
          <h2 className='service-title'>Rent</h2>
          <p className='service-description'>Enhancing Customer Experience: Our focus is on creating seamless experiences that delight your customers and foster loyalty</p>
        </div>
        <div className='service'>
          <h2 className='service-title'>Rent to Buy</h2>
          <p className='service-description'>Nulla posuere quam vel libero hendrerit, sit amet tincidunt lectus eleifend.</p>
        </div>
     
      </div>

      <div className='Ap'>
      <h1 className='primaryText'>Properties</h1>
      <div className='property-grid'>
        {propertyData.map(property => (
          <Card
            key={property.id}
            photo={property.photo}
            price={property.price}
            rate={property.rate}
            address={property.address}
            contact={property.contact}
            location={property.location}
          />
        ))}
      </div>
    </div>
 
    </div>
  );
};

