import React from "react";
import { MdCall } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { GoDeviceCameraVideo } from "react-icons/go";

import "./Contact.css";

export const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter C-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are dedicated to offering top-notch services to assist you. We
            firmly believe that an excellent living environment has the power to
            enhance your quality of life
          </span>
         <div className="flexStart flex row">
         <div className="flexCenter contactMode">
            <div className="flexColStart mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25} />
                </div>
                <div className="flexColStart Details">
                  <span className="primary">Call</span>
                  <span className="secondaryText">069 439 2083</span>
                </div>
              </div>
              <div className="flexCenter button">Call now</div>
            </div>
            <div className="flexColStart mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <IoChatbubbleEllipsesOutline  size={25} />
                </div>
                <div className="flexColStart Details">
                  <span className="primary">Chat</span>
                  <span className="secondaryText">069 439 2083</span>
                </div>
              </div>
              <div className="flexCenter button">Call now</div>
           
            </div>
         </div>
         {/*  */}
         <div className="flexColStart contactMode">
            <div className="flexColStart mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <GoDeviceCameraVideo size={25} />
                </div>
                <div className="flexColStart Details">
                  <span className="primary">Video Call</span>
                  <span className="secondaryText">069 439 2083</span>
                </div>
              </div>
              <div className="flexCenter button">Call now</div>
            </div>
            <div className="flexColStart mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter  size={25} />
                </div>
                <div className="flexColStart Details">
                  <span className="primary">Chat</span>
                  <span className="secondaryText">069 439 2083</span>
                </div>
              </div>
              <div className="flexCenter button">Call now</div>
           
            </div>
         </div>
          
           
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container c-imag">
            <img src="/contact.jpg " alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};
