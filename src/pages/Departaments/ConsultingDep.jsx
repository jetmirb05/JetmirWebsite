

import React,{useEffect, useState} from 'react'
import AboutDep from '../../components/AboutDep';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import ctaImage from "../../assets/images/consulting2.webp"
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';
import c1 from "../../assets/images/consulting1.webp"
import c2 from "../../assets/images/consulting2.webp"
import c3 from "../../assets/images/consulting3.webp"
import c4 from "../../assets/images/consulting4.webp"
import c5 from "../../assets/images/consulting5.webp"

function ConsultingDep() {


  const projectInfo=[
    {
      title:"Projekti 7",
      image: c1,
    },
    {
      title:"Projekti 8",
      image: c2,
    },
    {
      title:"Projekti 9",
      image: c3,
    },
    {
      title:"Projekti 10",
      image: c4,
    },
    {
      title:"Projekti 11",
      image: c5,
    },
  ]

  const [myData,setMyData] = useState([]);

  useEffect(()=>{
    if(window.location.href.includes('Dep'))
    setMyData({
      "Name":'airpods',
      "Image":ctaImage,
      "Text":'ConsDesc',
      "Textsize":"text-[44px]",
      "TextsizeSmall":"sm:text-[64px]",
      "Textcolor":"text-thorconsulting",
      "Bordercolor":"before:border-thorconsulting",
      "TextHeight":"70px",
      "TextWidth":"450",
    })    
  },[])
  
  return (
    <>
      <Navbar  NavbarColor="bg-thorconsulting" TextColor="text-thorconsulting" AfterColor="after:bg-thorconsulting" TextHoverColor="hover:text-thorconsulting"/>
      <AboutDep myData={myData}/>
      <ProjectsCarousel cardInfo={projectInfo}/>
      <CTA bgColor="thorconsulting" bgImage={ctaImage}/>

    </>
  )
}

export default ConsultingDep