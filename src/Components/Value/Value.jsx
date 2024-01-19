import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from"../../utils/accordion"
import "./Value.css";

const Value = () => {
   
  return (
    <div className="v-wrapper">
      <div className="paddings innerWidth  flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container v-image ">
            <img src="value.png" alt="value" />
          </div>
        </div>
      
      {/* right side */}
      <div className="flexColStart v-right">
        <span className="orangeText">Our Value</span>
        <span className="primaryText">Value we give to you</span>
        <span className="secondaryText">We are consistently prepared to assist you by delivering top-notch services. <br/> We strongly believe that a well-crafted living environment has the power to enhance<br/>  your quality of life.
        </span>

        <Accordion
    className="accordion"
    allowMultipleExpanded={false}
    preExpanded={[0]}
>
    {data.map((item, i) => (
        <AccordionItem
            key={i}
            uuid={i}
            className="accordionItem"
        >
            <AccordionItemHeading>
                <AccordionItemButton className="accordionbutton flexCenter">

                  

                    <div className="flexCenter icon">
                        {item.icon}
                        <span className="primaryText">
                            {item.heading}
                        </span>
                        <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20}/>
                        </div>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
               <p className="secondaryText">
                {item.detail}
                </p> 
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>

      </div>
      </div>
    </div>
  );
};

export default Value;
