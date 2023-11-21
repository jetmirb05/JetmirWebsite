import React,{useState,useEffect} from 'react'
import AboutDep from '../../components/AboutDep';

import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import EnergyIMG from "../../assets/images/renewable.webp"
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';

import s1 from '../../assets/images/renewable-energy/pic1.webp'
import s2 from '../../assets/images/renewable-energy/pic2.webp'
import s3 from '../../assets/images/renewable-energy/pic3.webp'
import s4 from '../../assets/images/renewable-energy/pic4.webp'
import s5 from '../../assets/images/renewable-energy/pic5.webp'
import s6 from '../../assets/images/renewable-energy/pic6.webp'

function RenewableEnergy() {


  const projectInfo=[
    {
      title:"Projekti 1",
      image: s1,
    },
    {
      title:"Projekti 2",
      image: s2,
    },
    {
      title:"Projekti 3",
      image: s3,
    },
    {
      title:"Projekti 4",
      image: s4,
    },
    {
      title:"Projekti 5",
      image: s5,
    },
    {
      title:"Projekti 6",
      image: s6,
    },
  ]

 
    const [myData,setMyData] = useState([]);

    useEffect(()=>{
      if(window.location.href.includes('Dep'))
      setMyData({
        "Name":'ipad',
        "Image":EnergyIMG,
        "Text":'rnwDescLg',
        "Textsize":"text-[34px]",
        "TextsizeSmall":"sm:text-[64px]",
        "Bordercolor":"before:border-thorenergy",
        "Textcolor":"text-thorenergy",
        "TextHeight":"70px",
        "TextWidth":"20px",
    })
    },[])
    return (
      <>
      <Navbar NavbarColor="bg-thorenergy" TextColor="text-thorenergy" AfterColor="after:bg-thorenergy" TextHoverColor="hover:text-thorenergy"/>
      <AboutDep myData={myData}/>
      <ProjectsCarousel cardInfo={projectInfo}/>
      <CTA bgColor="thorenergy" bgImage={EnergyIMG}/>
      </>
    )
}

export default RenewableEnergy;