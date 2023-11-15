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
      <Navbar NavbarColor="bg-thororange" TextColor="text-thororange" AfterColor="after:bg-thororange" TextHoverColor="hover:text-thororange" />
      <Hero />
      <MainAboutUs/>
      <Services/>
      {/* <News/> */}
      <Stats/>
      <CTA bgImage={bgImage} bgColor="thororange"/>

    </div>
  )
}

export default Home