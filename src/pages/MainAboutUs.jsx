import React from 'react'
import Logo from "../assets/images/Thor-Industries-Logo-Bardh.png";
import mineicon from "../assets/images/mine-icon.png";
import constructionicon from "../assets/images/construction-icon.png";
import energyicon from "../assets/images/energy-icon.png";
import iticon from "../assets/images/IT-icon.png";
import { motion } from 'framer-motion';
import { ContainerAnimation, imageAnimation, itemAnimation, textAnimation } from '../utils/motion';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const MainAboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="bg-thorblack items-center xl:pb-20">
        <div className="w-full flex pt-[20px] justify-center flex-col items-center bg-thorblack pb-0 xl:pb-0 xl:mb-0 lg:mb-[-80px]">
          <motion.h2
            variants={textAnimation}
            initial="hidden"
            whileInView="show"
            // viewport={{once:true}}
            className={`text-thorwhite sm:text-[64px] text-[48px] relative 
            before:absolute ${t('about')=="За нас" ? "before:w-[100px]" : "before:w-[170px]"}  before:h-[5px]
            before:left-[5px] md:before:bottom-[10px] before:bottom-0 before:border-thororange before:border-b-[6px]`}
          >
            {t('about') }
          </motion.h2>
        </div>

      <div className='flex py-10'>
        <div className='lg:mx-auto lg:flex-row md:flex-col flex-col xl:gap-60 md:gap-10 flex items-center'>

        <div className='sm:w-[33%] '>
              <motion.div variants={ContainerAnimation} initial='hidden' whileInView='show' className='flex flex-col w-auto h-auto lg:mt-0 mt-[-120px]'>
                <div className='flex flex-row w-[640px] md:w-[540px] h-[400px] lg:h-auto'>
                  <motion.div variants={itemAnimation} className='w-[230px] h-[230px] flex justify-center md:items-end items-center mt-[180px] ml-[40px] md:mt-32 md:ml-0'>
                    <img src={Logo} className="w-[50%] h-[35%] md:w-[65%] md:h-[42%] xl:w-[90%] xl:h-[64%]"/>
                  </motion.div>
                  <div className='w-[300px] h-auto flex flex-col ml-[0px] '>
                    <motion.div variants={itemAnimation} className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[170px] xl:h-[170px] bg-thororange ml-[-5px] mt-[150px] md:ml-[90px] md:mt-[130px] xl:ml-[150px] xl:mt-[-10px] rounded-full flex items-center justify-center'>
                      <img src={mineicon} className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] xl:w-[120px] xl:h-[120px]"/>
                    </motion.div>
                    <motion.div variants={itemAnimation} className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[170px] xl:h-[170px] bg-thororange ml-[-30px] mt-[25px] md:ml-[40px] md:mt-[25px] xl:ml-[140px] xl:mt-[40px] rounded-full flex items-center justify-center'>
                      <img src={constructionicon} className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] xl:w-[120px] xl:h-[120px]"/>
                    </motion.div>
                  </div>
                </div>
                <div className='w-[540px] h-[350px] flex flex-row' >
                  <motion.div variants={itemAnimation} className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[170px] xl:h-[170px] bg-thororange mt-[-20px] ml-[170px] md:mt-[10px] md:ml-[190px] xl:mt-[40px] xl:ml-[270px] rounded-full flex items-center justify-center'>
                      <img src={energyicon} className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] xl:w-[120px] xl:h-[120px]"/>
                  </motion.div>
                  <motion.div variants={itemAnimation} className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[170px] xl:h-[170px] bg-thororange mt-[30px] ml-[-220px] md:mt-[100px] md:ml-[-250px] xl:mt-[180px] xl:ml-[-380px] rounded-full flex items-center justify-center'>
                      <img src={iticon} className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] xl:w-[120px] xl:h-[120px]"/>
                  </motion.div>
                 
              </div>
            </motion.div>
          </div>

            <div className="my-32 flex flex-col justify-center items-center lg:mt-32 mt-[-120px]">
              <motion.h1
                variants={textAnimation}
                initial="hidden"
                whileInView="show"
                className="font-semibold text-center ml-[-240px] sm:text-left lg:text-left md:text-left md:text-[48px] text-[40px] lg:text-[64px] text-white py-3 md:py-0 md:ml-5 lg:ml-[88px] xl:ml-0"
              >
                {" "}
                <span className="text-thororange ">{t('homeAboutUsP0.1')}</span>
                <br /> {t('homeAboutUsP0.2')}
              </motion.h1>
              <motion.p
                variants={textAnimation}
                initial="hidden"
                whileInView="show"
                className="text-white w-[300px] ml-[-240px] text-justify lg:w-[470px] md:w-3/4 h-auto lg:mb-20 lg:mt-10 tracking-tight md:ml-5 lg:ml-[88px] xl:ml-0 font-medium">
                <b className="text-[18px]">Thor Industries </b>{t('homeAboutUsP1')}
                <br /> <br />
                {t('homeAboutUsP2')}
              </motion.p>

                <Link to={'/About'} onClick={()=>scrollTo(0,0)}
                className='bg-thororange text-thorwhite p-3 mr-60 md:mr-[420px] md:mt-[30px] lg:mr-60 lg:mt-[-30px] xl:mr-80 mt-[30px] rounded-full font-medium'>
                  {t('learnBtn')}<FontAwesomeIcon icon={faAnglesRight} className='pl-2 pt-1'/>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAboutUs;
