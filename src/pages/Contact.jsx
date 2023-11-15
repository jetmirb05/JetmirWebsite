import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faEnvelope, faLocationDot, faPhone, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faLinkedin,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { ContainerAnimation, LtRtextAnimation, textAnimation } from '../utils/motion';
import { motion } from "framer-motion";

const Contact = () => {
  const { t }=useTranslation()
    const [inputName,setName] = useState("");
    const [inputEmail,setEmail] = useState("");
    const [inputPhone,setPhone] = useState("");
    const [inputSubject,setSubject] = useState("");
    const [inputMessage,setMessage] = useState("");
    const [istoken,setisToken] = useState(false);
    const [isClicked,setisClicked] = useState(false);

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s0hogyi', 'template_vb1hpjh', form.current, 'fOGoyU4nXBmQj92L9')
        .then((result) => {
        }, (error) => {
        });
        e.target.reset()
        setisClicked(true)
        
    };



    function onChange(token) {
      if(typeof token === "string" && token.length > 400 ){
        if(inputName.length>0 && inputEmail.length>0 && inputPhone.length>0 && inputSubject.length>0 && inputMessage.length>0)
        setisToken(true)
      }
    }

    setTimeout(()=>{
      if(isClicked)
       window.location.reload(true);
    },4000)

  return (
    <>

    <Navbar NavbarColor="bg-thororange" />
    
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
          <Link href="/">{t('home')}</Link> /
        </motion.h2>
        <motion.h2
          variants={LtRtextAnimation}
          className="text-thororange text-lg ml-[10px] sm:text-xl mr-[10px]"
        >
          {" "}
          <Link href="/Contact">{t('CntUs')}</Link>
        </motion.h2>
      </motion.div>

        <motion.div variants={ContainerAnimation} initial="hidden" animate="show" className='w-[100vw] h-[40px] flex pt-[80px] justify-center flex-col items-center bg-thorblack'>
         <motion.h2 variants={textAnimation} className='text-thorwhite sm:text-[64px] text-[48px] relative
                          before:absolute
                          before:w-[170px]
                          before:h-[5px]
                          before:left-[5px]
                          before:bottom-0
                          before:border-thororange
                          before:border-b-4
         '>
          {t('CntUs')}
          </motion.h2>
        </motion.div>
    <motion.section variants={ContainerAnimation} initial="hidden" animate="show" className="bg-thorblack  md:h-auto lg:h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center outline-none ">
      <div className="py-44 pt-[80px] px-4 mx-auto max-w-screen-md w-[90%]">
          <motion.p variants={textAnimation} className="mb-8 font-light text-center text-thorwhite">{t('ContactUsDesc')}</motion.p>
          <motion.form variants={textAnimation} ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-thorwhite">{t('Contact_Name')}</label>
                  <input type="text" id="name" name='name' onChange={(e)=>{setName(e.target.value)}} className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-thorwhite dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('Contact_Name')} required />
              </div>
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-thorwhite">{t('Contact_Email')}</label>
                  <input type="email" id="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-thorwhite dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('Contact_Email')} required />
              </div>
              <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-thorwhite">{t('Contact_Phone')}</label>
                  <input type="number" id="phone" name='phone'  onChange={(e)=>{setPhone(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-thorwhite dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('Contact_Phone')} required />
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-thorwhite">{t('Contact_Subject')}</label>
                  <input type="text" id="subject" name='subject'  onChange={(e)=>{setSubject(e.target.value)}} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-thorwhite dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('TellUsMore')} required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-thorwhite">{t('Contact_Message')}</label>
                  <textarea id="message" rows="6" name='message'  onChange={(e)=>{setMessage(e.target.value)}}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-thorwhite dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('yourMSG')} required/>
              </div>
              <div className='flex flex-col justify-center items-center lg:items-start'>
                
              <ReCAPTCHA sitekey="6LeKnQwlAAAAABfqXBoxkTL1oH4Y0aQlHRSiUvjA" onChange={onChange} />

              {istoken == false ? "" : <button type="submit" id='submitBtn'  className="py-3 px-16 text-sm my-5 font-medium text-center text-thorwhite rounded-lg bg-thororange sm:w-fit" >Send message</button>}
              {isClicked && <p className='bg-thorenergy bg-opacity-60 w-[80vw] h-[10vh] lg:w-[40vw] lg:h-[10vh] 2xl:w-[30vw] 2xl:h-[9vh] text-thorwhite flex items-center justify-center'><FontAwesomeIcon icon={faCheckCircle} className='p-2' />Your message has been sent successfully.</p>}
              </div>
          
          
          </motion.form>
      </div>
      <motion.div variants={textAnimation} className='sm:w-[80%] lg:w-[20%] m-[10%] text-thorwhite h-[100vh] md:flex md:items-center md:flex-col lg:items-start'>
          <motion.h1 variants={textAnimation} className="mb-2 mt-8 text-2xl font-semibold">{t('FollowUs')}</motion.h1>
          <motion.div variants={textAnimation} className='flex flex-row pt-4 pb-6 '>
            <a href="https://www.linkedin.com/company/thorindustries/ ">
            <FontAwesomeIcon className="h-10 w-10 text-thororange pr-4 hover:text-thorwhite" icon={faLinkedin} />
            </a>
            <FontAwesomeIcon className="h-10 w-10 text-thororange pr-4" icon={faFacebook} />
            <FontAwesomeIcon className="h-10 w-10 text-thororange pr-4" icon={faInstagram} />
            <FontAwesomeIcon className="h-10 w-10 text-thororange" icon={faTwitter} />
          </motion.div>
          <h1 className="mb-2 mt-8 text-2xl font-semibold">{t('Location')}</h1>
          <div className='w-[100%] flex flex-col pt-4 pb-6 md:text-center lg:text-left'>
            <p className="mb-2 mt-8 text-[20px] font-regular">
            <FontAwesomeIcon className="h-6 w-6 text-thororange pr-2" icon={faLocationDot} />
              {t('LocationAddress')}
            </p>
            <p className="mb-2 mt-8 text-[20px] font-regular">
            <FontAwesomeIcon className="h-6 w-6 text-thororange pr-2" icon={faPhone} />
              +389 (0) 72 216 045
            </p>
            <p className="mb-2 mt-8 text-[20px] font-regular">
            <FontAwesomeIcon className="h-6 w-6 text-thororange pr-2" icon={faEnvelope} />
              info@thorindustriesmk.com
            </p>
            <p className="mb-2 mt-8 text-[20px] font-regular">
            <FontAwesomeIcon className="h-6 w-6 text-thororange pr-2" icon={faClock} />
              {t('WorkDays')}
            </p>
          </div>
      </motion.div>
    </motion.section>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.3004777631236!2d21.431084932163074!3d41.993826499665595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b6eef9ce8b%3A0xd29fff2c4059fa9c!2zU2hvcHBpbmcgY2VudGVyIOKAnlNvcmF2aWHigJw!5e0!3m2!1sen!2smk!4v1678870503637!5m2!1sen!2smk" className='2xl:w-[3000px] 2xl:h-[500px] xl:w-[2200px] xl:h-[500px] lg:w-[2000px] lg:h-[450px] md:w-[1000px] md:h-[400px] sm:w-[1000px] sm:h-[300px] w-[1000px] h-[300px]' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    
</>
  )
}

export default Contact