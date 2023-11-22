import React from 'react'
import Navbar from '../components/Navbar'
import imageURL from '../assets/images/staff.webp'
import { useTranslation } from "react-i18next";
import { ContainerAnimation, LtRtextAnimation,itemAnimation,imageAnimation,textAnimation } from '../utils/motion'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function StaffPage() {
  const { t }=useTranslation()
  return (
  <div className='bg-thormining w-auto h-auto'>


<Navbar
        NavbarColor=""
        TextColor="text-white"
        AfterColor="after:bg-white"
        TextHoverColor="hover:text-white"
      />

<motion.div variants={ContainerAnimation} initial="hidden" animate="show" className={`w-[100vw] h-[17vh] flex flex-row items-center pt-24 sm:pl-[50px] pl-[10px] bg-thorwhite`}>
    <motion.h2 variants={LtRtextAnimation} className='text-thorblack text-lg sm:text-xl' ><Link to="/">{t('home')}</Link></motion.h2>
    <motion.h2 variants={LtRtextAnimation} className='text-thorblack text-lg ml-[10px] sm:text-xl mr-[10px]'> / <Link to='/About'>{t('about')}</Link> / </motion.h2>
    <motion.h2 variants={LtRtextAnimation} className={`text-lg sm:text-xl `}>{t('OurStaff')}</motion.h2>
</motion.div>



    
    <div className='flex flex-col lg:flex-row flex-1 min-h-auto w-full  bg-thorblack text-white px-4 md:px-8 lg:px-12 gap-8 py-12 pb-[13vh]'>
 
 

    <motion.div variants={ContainerAnimation} className="sm:mt-[0px] mt-[20px] sm:w-[50%] lg:w-[55%] w-[88vw] text-thorblack ml-[2vw] sm:ml-[0px]  h-[200px] border-2 p-[20px] flex flex-col justify-around bg-thorwhite">
        <motion.h1 variants={ContainerAnimation} initial="hidden" animate="show" className='font-bold text-2xl'>{t('about')}</motion.h1>
        <motion.h5 variants={itemAnimation} className='font-regular '><Link to="/About">{t('wwa')}</Link></motion.h5>
        <motion.h5 variants={itemAnimation} className='font-regular '><Link to='/#'>{t('ourStaff')}</Link></motion.h5>
    </motion.div>

<div className='flex flex-col items-center gap-20 px:4 md:px-8 lg:px-12'>
   
    <div className='flex flex-col md:flex-row gap-12 '>
        <motion.img variants={imageAnimation} src={imageURL } className='w-[100%] h-[100%] sm:w-[33%]'/>
      <div className='w-full md:w-1/2 '>
      <motion.h2 variants={textAnimation} className='text-thorwhite sm:text-[48px] text-[48px] relative font-medium
                          before:absolute
                          before:w-[100px]
                          before:h-[5px]
                          before:left-[0px]
                          before:bottom-0
                          before:border-thororange
                          before:border-b-[5px]
        '>
          {t('ourStaff')}
        </motion.h2>
        <motion.p variants={textAnimation} className='mt-[40px]'>{t('OurStaff_text1')} </motion.p>
           <motion.p variants={textAnimation} className='mt-[10px]'>{t('OurStaff_text2')}</motion.p>
           <motion.p variants={textAnimation} className='mt-[10px]'>{t('OurStaff_text3')} </motion.p>
            
        </div>
    </div>

    



  </div>        
</div>
</div>
  )
}

export default StaffPage