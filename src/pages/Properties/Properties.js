import React from "react";
import "./Properties.css";
import { sliderSetting } from '../../utils/common'

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../../utils/properties.json";


const Properties = () => {
  return (
    <div className="p-container">
      <h1>Professional Real Estate Services</h1>
      <p className="professional-message">
        Welcome to our professional properties page. Explore the finest real
        estate options.
      </p>

      <div className="property-container">
        <div className="property ">
          <h2 className="orangeText">Golden Oasis Residence</h2>
          <p className="professional-text">
          Discover the extraordinary charm of Sunny Haven Retreat, a captivating property that transcends the ordinary. Situated on Meadow Street, this residence offers a haven of tranquility in the heart of Kinshasa, Congo. Immerse yourself in the unparalleled beauty of the surroundings, where lush landscapes and modern design seamlessly blend. The thoughtful architecture and meticulous attention to detail create an ambiance of refined luxury. Step inside to find a sanctuary that combines elegance with functionality. Every corner tells a story of comfort and style, from the inviting living spaces to the carefully crafted bedrooms. ,
          </p>
        </div>

        <div className="property">
          <h2 className="orangeText">Sunny Haven Retreat</h2>
          <p className="professional-text">
          Indulge in the opulence of Golden Oasis Residence, an exclusive retreat nestled along Golden Boulevard in the vibrant city of Lubumbashi, Congo. This extraordinary property defines luxurious living with its impeccable design and unrivaled amenities. As you enter, you're greeted by a grand foyer that sets the tone for the lavish experience that awaits. The living spaces exude sophistication, adorned with exquisite finishes and panoramic views of the surrounding garden. the heart of Gardenland.,
          </p>
        </div>

        <div className="property">
          <h2 className="orangeText">Harmony Vista Homes</h2>
          <p className="professional-text">
          Welcome to Harmony Vista Homes, an exquisite property situated on Harmony Street in the enchanting city of Goma, Congo. This residence is a perfect blend of modern design and natural serenity, offering a harmonious living experience. Step inside to discover a space designed for both comfort and functionality. The living areas are bathed in natural light, creating a warm and inviting atmosphere. The bedrooms are thoughtfully designed retreats, providing a peaceful escape at the end of the day. Harmony Vista Homes is more than a house; it's a reflection of a tranquil lifestyle. Enjoy the peaceful surroundings and the ease of everyday living in this unique property. Make Harmony Vista Homes your haven of comfort and style in the heart of Tranquil Zone.
          </p>
        </div>
      </div>
      <h1>Our Best Offer</h1>
      <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Exclusive Options</span>
                <span className='primaryText'>
Stylish Living Environments</span>
                
            </div>
            
            <Swiper {...sliderSetting}>
            
                {
                  data.map((card1, i)=>(
                    <SwiperSlide key={i}>
                        <div className=" flexColStart r-card">
                            <img src={card1.image} alt="home" />
                            <span className='secondaryText r-price'>
                               <span style={{color:"orange"}}>$</span><span>{card1.price}</span> 
                            </span>
                            <span className='primaryText'>{card1.name}</span>
                            <span className='secondaryText'>{card1.detail}</span>
                        </div>
                    </SwiperSlide>
                  ))  
                }
            </Swiper>
            <Swiper {...sliderSetting}>
            
                {
                  data.map((card, i)=>(
                    <SwiperSlide key={i}>
                        <div className=" flexColStart r-card">
                            <img src={card.image} alt="home" />
                            <span className='secondaryText r-price'>
                               <span style={{color:"orange"}}>$</span><span>{card.price}</span> 
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>
                        </div>
                    </SwiperSlide>
                  ))  
                }
            </Swiper>

        </div>
    </div>
  );
};

export default Properties;
