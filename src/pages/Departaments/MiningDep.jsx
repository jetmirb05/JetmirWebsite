import React,{useEffect, useState} from 'react'
import AboutDep from '../../components/AboutDep';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import ctaImage from "../../assets/images/ey-investment.webp"
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';
import c1 from "../../assets/images/Mining-Foto/mining1.webp"
import c2 from "../../assets/images/Mining-Foto/mining2.webp"
import c3 from "../../assets/images/Mining-Foto/mining3.webp"
import c4 from "../../assets/images/Mining-Foto/mining4.webp"
import c5 from "../../assets/images/Mining-Foto/mining5.webp"
import c6 from "../../assets/images/Mining-Foto/mining6.webp"

function miningDep() {


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
    {
      title:"Projekti 11",
      image: c6,
    },
  ]

  const [myData,setMyData] = useState([]);

  useEffect(()=>{
    if(window.location.href.includes('Dep'))
    setMyData({
      "Name":'mac',
      "Image":ctaImage,
      "Text":'minDescLg',
      "Textsize":"text-[44px]",
      "TextsizeSmall":"sm:text-[64px]",
      "Textcolor":"text-thormining",
      "Bordercolor":"before:border-thormining",
      "TextHeight":"70px",
      "TextWidth":"450",
    })    
  },[])
  
  return (
    <>
      <Navbar  NavbarColor="bg-thormining" TextColor="text-thormining" AfterColor="after:bg-thormining" TextHoverColor="hover:text-thormining"/>
      <AboutDep myData={myData}/>
      <ProjectsCarousel cardInfo={projectInfo}/>
      <CTA bgColor="thormining" bgImage={ctaImage}/>

    </>
  )
}

export default miningDep