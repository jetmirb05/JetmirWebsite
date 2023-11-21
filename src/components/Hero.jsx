import React, { useState, useEffect } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { ContainerAnimation,textAnimation} from "../utils/motion";
import miningimage from '../assets/images/Mining-Foto/mac.jpg';
import renewableimage from '../assets/images/renewable-energy/iphone.png';
import constructionimage from '../assets/images/Construction-Foto/ipad.jpg';
import ConsultingImage from "../assets/images/airpods.png";
import itImage from '../assets/images/watch.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  //used for translation
  const { t }=useTranslation()
  const slides = [
    {url: miningimage, title: t('ipad'), text: t('mintext'), color:'text-thormining', link:'/MiningDep'},
    {url: constructionimage, title: t('ipad'), text: t('cnsttext'), color:'text-thorconstruction', link:'/ConstructionDep'},
    {url: renewableimage, title: t('iphone'), text: t('rnwtext'), color:'text-thorenergy', link:'/RenewableEnergyDep'},
    {url: ConsultingImage, title: t('airpods'), text: t('ConsSlogan'), color:'text-thorconsulting', link: '/ConsultingDep'},
    {url: itImage, title: t('watch'), text: t('ItSText'), color:'text-thorit', link:'#'}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  // Set the slide show interval to 10 seconds
  const interval = 10000;

  // Start the slide show interval when the component mounts
  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Left arrow key
        prevSlide();
      } else if (event.keyCode === 39) { // Right arrow key
        nextSlide();
      }
    }
  
    window.addEventListener('keydown', handleKeyDown);
  
    const timer = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, interval);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isHovering]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });



  return (
    <motion.div 
    variants={ContainerAnimation} 
    initial="hidden" 
    animate="show" 
    viewport={{once:true}} 
    {...handlers} 
    className=" 
    bg-black 
    max-w-full 
    max-h-full 
    h-screen 
    w-full 
    m-auto 
    py-0 
    px-0 
    relative group" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>

      <motion.div 
      style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
      className=" cursor-grab
      w-full 
      h-full 
      bg-center 
      bg-cover 
      opacity-50 
      duration-[300ms]">
      </motion.div>
      
      <div className=" cursor-grab
      absolute 
      top-[50%] 
      left-4 
      md:left-16 
      lg:left-32 
      translate-y-[-50%]">

          <motion.p variants={textAnimation} 
          className={`
          text-5xl 
          md:text-5xl 
          lg:text-7xl 
          font-bold 
          py-2 
          ${[slides[currentIndex].color]}  
          flex-wrap 
          duration-300 
          drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)] 
          select-none`}>
          {slides[currentIndex].title}
          </motion.p>

          <motion.p variants={textAnimation} 
          className='
          text-xl
          md:text-2xl 
          lg:text-5xl 
          text-thorwhite 
          font-medium 
          drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)] 
          flex-wrap
          w-[80vw]
          duration-300 
          py-2 
          select-none'>
          {slides[currentIndex].text}
          </motion.p>
          <Link to={slides[currentIndex].link}>
            {console.log(slides[currentIndex].link)}
          <motion.button variants={textAnimation} 
          className={`
          bg-thorwhite 
          ${[slides[currentIndex].color]} 
          active:bg-transparent 
          active:border-2 
          hover:duration-75 
          duration-75 
          font-bold 
          my-4 
          py-4 
          px-4 
          rounded-full`}>
          {t('LearnMoreBtn')}
          </motion.button>
          </Link>

      </div>
      
      {/*left arrow*/}
      <div className='
      hidden 
      md:group-hover:block 
      lg:group-hover:block 
      select-none  
      absolute top-[50%] 
      -translate-x-0 
      translate-y-[-50%] 
      left-5 
      text-2xl 
      rounded-full 
      p-2 
      bg-black/20 
      duration-200 
      hover:bg-thororange 
      hover:duration-200 
      text-white 
      cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>

      {/*right  arrow*/}
      <div className='
      hidden 
      md:group-hover:block 
      lg:group-hover:block 
      select-none 
      absolute 
      top-[50%] 
      -translate-x-0 
      translate-y-[-50%] 
      right-5 
      text-2xl 
      rounded-full 
      p-2 
      bg-black/20 
      duration-200 
      hover:bg-thororange 
      hover:duration-200 
      text-white 
      cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      
      {/*carousel dots*/}
      <div className='flex absolute bottom-[5%] left-[50%] -translate-x-[50%] translate-y-[-50%] '>
            {slides.map((slide, slideIndex) => (
            <RxDotFilled key={slideIndex} onClick={() => goToSlide(slideIndex)} className={` /*goToSlide is a function*/
            ${
            slideIndex === currentIndex
              ? `active:text-thororange
                 text-thororange 
                 duration-200 
                 active:duration-200 
                 scale-[1.8] 
                 md:lg:scale-125 
                 active:scale-150 
                 cursor-pointer
                 select-none` /*active slide*/
              
                 : `
                 text-thorwhite 
                 md:lg:hover:text-thororange 
                 active:text-thororange 
                 duration-200 
                 scale-100 
                 active:scale-150 
                 active:duration-200 
                 cursor-pointer
                 select-none` /*inactive slide*/
            }`}/>
          
        ))}
      </div>
    </motion.div>
  )
}

export default Hero;
