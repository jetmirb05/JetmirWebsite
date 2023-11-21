import React from 'react'
import  Card from '../../components/Card';
import DepNavigator from './DepNavigator';
import CTA from '../../components/CTA';
import bgImage from '../../assets/images/CTA-Home-Background.webp';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import miningPic from "../../assets/images/mining-carousel.webp"
import constructionPic from "../../assets/images/construction-1.webp"
import renewablePic from "../../assets/images/renewable.webp"
import computersPic from "../../assets/images/IT-solutions.webp"
import consultingPic from "../../assets/images/consulting1.webp"
import { motion } from 'framer-motion';



import { useTranslation } from 'react-i18next';
import { ContainerAnimation, LtRtextAnimation } from '../../utils/motion';

const Departaments = () => {
  const { t } =useTranslation()


  const deps=[
    {
      name:t('mac'),
      description:t('minDesc'),
      image:miningPic,
      toDep:"/MiningDep"
    },
    {
      name:t('iphone'),
      description:t('cnstDesc'),
      image:constructionPic,
      toDep:"/ConstructionDep"
    },
    {
      name:t('airpods'),
      description:t('rnwDesc'),
      image:renewablePic,
      toDep:"/RenewableEnergyDep"
    },
    {
      name:t('ItS'),
      description:t('ItSDesc'),
      image:computersPic,
      toDep:"#"
    },
    {
      name:t('Cons'),
      description:t('ConsDesc'),
      image:consultingPic,
      toDep:"/ConsultingDep"
    },
  ]


  return (
    <>
    <Navbar NavbarColor="bg-thororange" TextColor="text-thororange" AfterColor="after:bg-thororange" TextHoverColor="hover:text-thororange"/>
    
    <motion.div
        variants={ContainerAnimation}
        initial="hidden"
        animate="show"
        className={`w-[100vw] h-[17vh] flex flex-row items-center pt-24 sm:pl-[50px] pl-[10px] bg-thorwhite `}
      >
        <motion.h2
          variants={LtRtextAnimation}
          className="text-thorblack text-lg sm:text-xl"
        >
          <Link to="/">{t('home')}</Link> /
        </motion.h2>
        <motion.h2
          variants={LtRtextAnimation}
          className="text-thororange text-lg ml-[10px] sm:text-xl mr-[10px]"
        >
          {" "}
          <Link to="/Departments">{t('depart')}</Link>
        </motion.h2>
      </motion.div>

      <div className='flex flex-col lg:flex-row flex-1 min-h-[100vh] w-full bg-thorblack text-white px-4 md:px-8 lg:px-12 gap-8 py-12'>


          <DepNavigator/>
        
        
        <motion.div variants={ContainerAnimation} initial="hidden" animate="show" className='w-4/5 h-full flex flex-col mx-auto'>

        <div className='sm:pl-[120px] pt-5  mx-0 '>
          <motion.h2 variants={LtRtextAnimation} className='text-white sm:text-[64px] text-4xl text-center pt-5 sm:pt-0 relative lg:pt-40 lg:pr-20 xl:pr-72 min-[1315px]:pt-10 before:absolute
                          before:border-b-4
                          before:border-thororange
                          before:sm:w-[200px]
                          before:w-[70px]
                          before:bottom-[-20px] '>{t('depart')}
                          
                          </motion.h2>
        </div>

          <motion.div variants={LtRtextAnimation} initial="hidden" animate="show"   className='grid lg:grid-cols-2 xl:pl-0 grid-cols-1 pb-5 sm:pt-20 mx-auto lg:mx-0 '>
          {
            deps.map((dep,index)=><Card name={dep.name} description={dep.description} image={dep.image} toDep={dep.toDep} key={index}/>)
          }
          </motion.div>
        </motion.div>


      </div>

    
    <CTA bgImage={bgImage} bgColor={'thororange'}/>
    </>
  )
}

export default Departaments
