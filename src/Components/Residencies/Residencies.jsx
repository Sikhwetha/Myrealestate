import React from 'react'
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';
import "./Residencies.css"
import data from '../../utils/slider.json'
import { sliderSetting } from '../../utils/common'

const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Premium choices</span>
                <span className='primaryText'>Fashionable living spaces</span>
                
            </div>
            
            <Swiper {...sliderSetting}>
            <SliderButton/>
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
    </section>
  )
}

export default Residencies

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className='r-button'>
      <button onClick={()=>swiper.slidePrev()}>
        &lt;
      </button>
      <button onClick={()=>swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
