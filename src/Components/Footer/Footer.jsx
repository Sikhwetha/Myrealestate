import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <section className="f-wrapper">
        {/* left */}
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo" width={120} />

                <span className="secondaryText">
                Our vision is to optimize every environment to provide an <br/> unparalleled quality of living for individuals.  
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span>71 Devillier Street ,Turffontain</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>product</span>
                    <span>About US</span>
                </div>
            </div>
        </div>
    </section>
  )
}
