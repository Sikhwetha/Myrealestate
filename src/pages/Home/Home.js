// Home.js
import React from "react";
import Hero from "../../Components/Hero/Hero";
import Companies from '../../Components/companies/Companies';
import Residencies from "../../Components/Residencies/Residencies";
import Value  from "../../Components/Value/Value";
import {Contact}  from "../../Components/Contact/Contact";
import {GetStarted } from "../../Components/GetStarted/GetStarted";

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default Home;
