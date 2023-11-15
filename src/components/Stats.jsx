import React,{useRef,useEffect,useState} from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { ContainerAnimation, itemAnimation } from '../utils/motion';
import { useTranslation } from 'react-i18next';


export const Stats = () => {
    const{ t } =useTranslation()
    const myRef = useRef();
    const [elementVisible,setElementVisible] = useState()
    const [temp,setTemp] = useState(0);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setElementVisible(entry.isIntersecting);
        })
        observer.observe(myRef.current)
    })
    
    useEffect(()=>{
        if(elementVisible)
        setTemp(temp+1)
    },[elementVisible])
   

  return (
    <>
         <div className='w-screen bg-thororange flex justify-between items-center flex-col h-[20vh] sm:h-[14vh] pb-[15px]'>
            <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='w-[100%] h-[100%] flex flex-row justify-evenly text-center '>
                <motion.div variants={itemAnimation} className='sm:w-1/5 h-full flex justify-center items-center sm:flex-row 
                                w-[90px] flex-col'>
                    <div className='
                                    sm:text-6xl  
                                    text-[30px] font-bold 
                                    md:text-[40px]
                                    lg:text-[60px]'>
                     35+
                    </div>
                    <div className='sm:text-xl  sm:leading-7 text-white
                                    text-[13px] leading-6 
                                    md:text-[15px]
                                    lg:text-[18px]'>
                    {t('stat1')}
                    </div>
                </motion.div>
                <motion.div variants={itemAnimation} className='sm:w-1/5 h-full flex justify-center items-center sm:flex-row
                                w-[90px] flex-col'>
                    <div className='text-gray-900 sm:text-6xl
                                text-[30px] font-bold 
                                md:text-[40px]
                                lg:text-[60px]' ref={myRef}>
                                    50+
                    </div>
                    <div className='sm:text-xl  sm:leading-7 text-white
                                    text-[13px] leading-6 
                                    md:text-[15px]
                                    lg:text-[18px]
                                    '>
                        {t('stat2')}
                    </div>
                </motion.div>
                <motion.div variants={itemAnimation} className='sm:w-1/5 h-full flex justify-center items-center sm:flex-row
                                w-[90px] flex-col'>
                    <div className='text-gray-900  sm:text-6xl
                                text-[30px] font-bold
                                md:text-[40px] 
                                lg:text-[60px] '> 
                    10+
                    </div>
                    <div className='sm:text-xl  sm:leading-2 text-white
                                    text-[13px] leading-2 content-evenly
                                    md:text-[12px]
                                    lg:text-[18px]
                                    '>
                        {t('stat3')}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

