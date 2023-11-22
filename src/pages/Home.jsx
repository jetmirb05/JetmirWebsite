import React from 'react'
import CTA from '../components/CTA';
import { Stats } from '../components/Stats';
import Navbar from "../components/Navbar";
import Services from "../components/Service";
import bgImage from '../assets/images/CTA-Home-Background.webp';
import MainAboutUs from './MainAboutUs';
import Hero from '../components/Hero';


const Home = () => {
  return (
    <div >
      <Navbar NavbarColor="bg-white" TextColor="text-white" AfterColor="after:bg-white" TextHoverColor="hover:text-white" />
      <Hero />
      <MainAboutUs/>
      <Services/>
      {/* <News/> */}
      <Stats/>
      <CTA bgImage={bgImage} bgColor="white"/>

    </div>
  )
}

export default Home