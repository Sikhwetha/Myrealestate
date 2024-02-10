import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth  flexCenter hero-container">
        {/* left side */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:2,type:"spring"}}
            >
              Explore <br />
              Your Dream <br />
              Home
            </motion.h1>
          </div>

          <div className="flexColStart hero-description">
            <motion.span
             initial={{x:"2rem",opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{duration:2,type:"spring"}}
            >Discover a Range of Tailored Properties for Your Ease</motion.span>
            <motion.span
             initial={{y:"2rem",opacity:0}}
             animate={{y:0,opacity:1}}
             transition={{duration:2,type:"spring"}}
            >Leave Behind the Challenges 
            of Securing Your Ideal Residence</motion.span>
            
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button1">Search</button>
          </div>

          <div className="flexCenter starts">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span className="span">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={3300} end={2900} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Custommer</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1000} end={28} duration={4} />
                <span className="span">+</span>
              </span>
              <span className="secondaryText">Award winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
           initial={{x:"2rem",opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:2,type:"lenear"}}
           className="image-container imag">
            <img src="./hero-image.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
