import React,{useState,useEffect} from 'react'
import AboutDep from '../../components/AboutDep';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';
import ConstructionIMG from "../../assets/images/construction-1.webp"

import s1 from '../../assets/images/Construction-Foto/slider-1.webp'
import s2 from '../../assets/images/Construction-Foto/slider-2.webp'
import s3 from '../../assets/images/Construction-Foto/slider-3.webp'
import s4 from '../../assets/images/Construction-Foto/slider-4.webp'
import s5 from '../../assets/images/Construction-Foto/slider-5.webp'
import s6 from '../../assets/images/Construction-Foto/slider-6.webp'

function ConstructionDep() {

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
      image:s6,
    },
    
  ]

  const [myData,setMyData] = useState(()=>[]);
  useEffect(()=>{
    if(window.location.href.includes('Dep'))
    setMyData({
      "Name":'iphone',
      "Image":ConstructionIMG,
      "Text":'cnstDescLg',
      "Textsize":"text-[44px]",
      "TextsizeSmall":"sm:text-[64px]",
      "Textcolor":"text-thorconstruction",
      "Bordercolor":"before:border-thorconstruction",
      "TextHeight":"100px",
      "TextWidth":"450px",
      
    })
  },[])
  return (
    <>
    <Navbar NavbarColor="bg-thorconstruction" TextColor="text-thorconstruction" AfterColor="after:bg-thorconstruction" TextHoverColor="hover:text-thorconstruction" />
    <AboutDep myData={myData}/>
    <ProjectsCarousel cardInfo={projectInfo}/>
    <CTA bgColor="thorconstruction" bgImage={ConstructionIMG}/>
    </>
  )
}

export default ConstructionDep