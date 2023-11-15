import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { ContainerAnimation, itemAnimation } from "../utils/motion";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Service = () => {
  const { t } =useTranslation()

  return (
    <>
        <div className='w-full p-10 flex flex-col items-center bg-thorwhite'>
            <h2 className='text-thorblack sm:text-[64px] text-[48px] relative font-semibold before:absolute before:w-[170px] before:h-[5px] before:left-[3px] before:bottom-0
              before:border-thororange before:border-b-[6px]'>{t('Services')}</h2>


            <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='w-full lg:w-full xl:w-full md:w-[60%] h-[80%] mt-12 lg:mt-0 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16 lg:pt-10 xl:grid-cols-4 xl:gap-20 xl:pt-12 2xl:gap-24 2xl:p-12'>
              <motion.div variants={itemAnimation} className='bg-thorblack rounded-[25px] flex flex-col pr-[20px] items-start text-thorwhite px-8 xl:px-9 2xl:px-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl relative'>
                <motion.p className='font-semibold text-[24px]'>{t('min')}</motion.p>
                <motion.p className='font-normal text-[16px] pt-3 pb-16 w-44 xl:w-52 2xl:w-52 '>{t('minSlogan')}</motion.p>
                <Link to="/MiningDep">
                <motion.button className='bg-thororange w-auto h-8 px-[15px] rounded-xl lg:mb-6 mb-6 xl:mb-8 text-center pt-[2px] absolute bottom-0 left-[30px]' onClick={()=>window.scrollTo(0,0)}>{t('More')}<FontAwesomeIcon icon={faAnglesRight} className='pl-2' /></motion.button>
                </Link>
              </motion.div>
              <motion.div variants={itemAnimation} className='bg-thorblack rounded-[25px] flex flex-col items-start text-thorwhite px-8 xl:px-9 2xl:px-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl relative'>
                <motion.p className='font-semibold text-[24px]'>{t('cnst')}</motion.p>
                <motion.p className='font-normal text-[16px] pt-3 pb-16 w-44 xl:w-52 2xl:w-52'>{t('cnstSlogan')}</motion.p>
                <Link to="/ConstructionDep">
                  <motion.button className='bg-thororange w-auto h-8 px-[15px] rounded-xl lg:mb-6 mb-6 xl:mb-8 text-center pt-[2px] absolute bottom-0 left-[30px]' onClick={()=>window.scrollTo(0,0)}>{t('More')}<FontAwesomeIcon icon={faAnglesRight} className='pl-2' /></motion.button>
                </Link>
              </motion.div>
              <motion.div variants={itemAnimation} className='bg-thorblack rounded-[25px] flex flex-col items-start text-thorwhite px-8 xl:px-9 2xl:px-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl relative'>
                <motion.p className='font-semibold text-[24px]'>{t('rnw')}</motion.p>
                <motion.p className='font-normal text-[16px] pt-3 pb-16 w-44 xl:w-52 2xl:w-52'>{t('rnwSlogan')}</motion.p>
                <Link to="/RenewableEnergyDep">
                  <motion.button className='bg-thororange w-auto h-8 px-[15px] rounded-xl lg:mb-8 mb-6 xl:mb-8 text-center pt-[2px] absolute bottom-0 left-[30px]' onClick={()=>window.scrollTo(0,0)}>{t('More')}<FontAwesomeIcon icon={faAnglesRight} className='pl-2' /></motion.button>
                </Link>
              </motion.div>
              <motion.div variants={itemAnimation} className='bg-thorblack rounded-[25px] flex flex-col items-start text-thorwhite px-8 xl:px-9 2xl:px-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl relative'>
                <motion.p className='font-semibold text-[24px]'>{t('Cons')}</motion.p>
                <motion.p className='font-normal text-[16px] pt-3 pb-16 w-44 xl:w-52 2xl:w-52'>{t('ConsSlogan')}</motion.p>
                <Link to="/ConsultingDep">
                  <motion.button className='bg-thororange w-auto h-8 px-[15px] rounded-xl mt-[-25px] lg:mb-8 mb-6 xl:mb-8 text-center pt-[2px] bottom-0 left-[30px]' onClick={()=>window.scrollTo(0,0)}>{t('More')}<FontAwesomeIcon icon={faAnglesRight} className='pl-2' /></motion.button>
                </Link>
              </motion.div>
              <motion.div variants={itemAnimation} className='bg-thorblack rounded-[25px] flex flex-col items-start text-thorwhite px-8 xl:px-9 2xl:px-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl relative'>
                <motion.p className='font-semibold text-[24px]'>{t('ItS')}</motion.p>
                <motion.p className='font-normal text-[16px] pt-3 pb-16 w-44 xl:w-52 2xl:w-52'>{t('ItSSlogan')}</motion.p>
                <Link to="#">
                  <motion.button className='bg-thororange w-auto h-8 px-[15px] rounded-xl mt-[-25px] lg:mb-8 mb-6 xl:mb-8 text-center pt-[2px] bottom-0 left-[30px]'>{t('More')}<FontAwesomeIcon icon={faAnglesRight} className='pl-2' /></motion.button>
                </Link>
              </motion.div>
              
            </motion.div>
            
            {/* <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='w-full  grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-24 lg:p-16'>
             
            {services.map((service, index) => (
              <motion.div variants={itemAnimation} key={index} className='bg-thorblack rounded-[25px] flex flex-col items-start text-thorwhite pl-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl'>
            <motion.div layout variants={ContainerAnimation} initial="hidden" whileInView="show" viewport={{once: true}} className='w-full  grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-24 lg:p-16'>
            {services.map((service) => (
              <motion.div layout variants={itemAnimation}  key={service.id} className='bg-thorblack rounded-[25px] flex flex-col items-start text-thorwhite pl-12 pt-8 transition ease-in-out hover:-translate-y-3 hover:shadow-2xl'>
              <motion.p  className='font-semibold text-[24px]'>{service.name}</motion.p>
              <motion.p  className='font-normal text-[16px] pt-2 pb-16'>{service.description}</motion.p>
              <motion.button  className='bg-thororange w-[85px] h-8 rounded-xl'>More<FontAwesomeIcon icon={faAnglesRight} className='pl-2' /></motion.button>
            </motion.div>
            ))}
            
           
       
            </motion.div> */}
        </div>
    </>
  )
}
export default Service;