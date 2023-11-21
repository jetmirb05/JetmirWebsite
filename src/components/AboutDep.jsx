import React, { useState ,useEffect} from 'react'
import DepNavigator from '../pages/Departaments/DepNavigator';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ContainerAnimation, LtRtextAnimation, textAnimation } from '../utils/motion';
import { Link } from 'react-router-dom';

const AboutDep = ({myData}) => {

  const { t } =useTranslation()

  return (
    
<>
      <motion.div
        variants={ContainerAnimation}
        initial="hidden"
        animate="show"
        className={`w-[100vw] h-[17vh] 2xl:h-[18vh]  flex flex-row items-center pt-24 sm:pl-[50px] pl-2 bg-thorwhite`}
      >
        <motion.h2
          variants={LtRtextAnimation}
          className="text-thorblack sm:text-xl text-[12px] lg:mx-2 xl:text-2xl"
        >
        <Link to="/">{t('home')} /</Link>
        </motion.h2>
        <motion.h2
          variants={LtRtextAnimation}
          className="text-thorblack text-[12px] sm:text-xl mx-[2px] lg:mx-2 xl:text-2xl"
        >
        <Link to="/Departments">{t('product')} /</Link>
        </motion.h2>
        <motion.h2
          variants={LtRtextAnimation}
          className={` text-[14px] sm:text-xl  ${myData.Textcolor} lg:ml-2 xl:text-xl`}
        >
          {t(myData.Name)}
        </motion.h2>
      </motion.div>

<div className='flex flex-col lg:flex-row flex-1 min-h-[100vh] w-full bg-thorblack text-white px-4 md:px-8 lg:px-12 gap-8 py-12'>
      <DepNavigator Name={myData.Name}/>
    
    <motion.div variants={ContainerAnimation} initial="hidden" animate="show" className='flex flex-col items-center gap-20 px:4 md:px-8 lg:px-12'>
          <motion.h2 variants={LtRtextAnimation} className={`text-thorwhite sm:text-[64px] text-[48px] relative 
                          before:absolute
                          text-center
                         ${myData.Name == "min" ? "before:w-[170px]" : myData.Name=="cnst" ? "before:w-[160px]" : myData.Name=="rnw" ? "before:w-[300px]" : myData.Name =="Cons" ? "before:w-[150px]" : ""}
                          
                          before:h-[5px]
                          before:left-[5px]
                          before:bottom-0
                          ${myData.Bordercolor}
                          before:border-b-4
         `}>
         {t(myData.Name)}
          </motion.h2>
        
        <motion.div variants={ContainerAnimation} initial="hidden" animate="show" className='flex flex-col md:flex-row gap-12'>
          <motion.p variants={textAnimation} className={`w-full md:w-[700px]`}>{t(myData.Text)}</motion.p>
          <motion.img variants={textAnimation} src={myData.Image} alt="Departments Photo" className=' w-full md:w-1/2 md:h-96 object-cover ' />
        </motion.div>
      </motion.div>        
</div>
    </>
  )
}

export default AboutDep