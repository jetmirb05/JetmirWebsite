import React from "react";
import Navbar from "../components/Navbar";
import aboutIMG from "../assets/images/aboutus.webp";

import { motion } from "framer-motion";
import {
  ContainerAnimation,
  imageAnimation,
  LtRtextAnimation,
  textAnimation,
  itemAnimation,
} from "../utils/motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  return (
    <>


     

      
      <div className="flex flex-col lg:flex-row flex-1 min-h-auto w-full bg-thorblack text-white px-4 md:px-8 lg:px-12 gap-8 py-12">
        <motion.div
          variants={ContainerAnimation}
          initial="hidden"
          animate="show"
          className="sm:mt-[0px] mt-[20px] sm:w-[50%] lg:w-[40%] w-[88vw] text-thorblack ml-[2vw] sm:ml-[0px]  h-[200px] border-2 p-[20px] flex flex-col justify-around bg-thorwhite"
        >
          <motion.h1 variants={itemAnimation} className="font-bold text-2xl">
            {t("about")}
          </motion.h1>
          <motion.h5
            variants={itemAnimation}
            className="font-regular text-thororange"
          >
            <Link to="/About">{t("wwa")}</Link>
          </motion.h5>
          <motion.h5
            variants={itemAnimation}
            className="font-regular hover:text-thororange"
          >
            <Link to="/StaffPage">{t("ourStaff")}</Link>
          </motion.h5>
        </motion.div>

        <motion.div
          variants={ContainerAnimation}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center gap-20 px:4 md:px-8 lg:px-12 bg-green"
        >
          <div className="flex flex-col md:flex-row gap-12 ">
            <motion.img
              variants={imageAnimation}
              src={aboutIMG}
              className="sm:w-[50%] w-[90vw] h-[100%]"
            />
            <div className="w-full md:w-1/2 ">
              <motion.h2
                variants={textAnimation}
                className="text-thorwhite sm:text-[48px] text-[48px] relative font-medium
                              before:absolute
                              before:w-[100px]
                              before:h-[5px]
                              before:left-[0px]
                              before:bottom-0
                              before:border-thororange
                              before:border-b-[5px]
            "
              >
                {t("about")}
              </motion.h2>
              <motion.p variants={textAnimation} className="text-[14px] pt-8">
                <b className="text-[16px]">Thor Industriessss, </b>
                {t("aboutPageFirst")}
              </motion.p>

              <motion.p
                variants={textAnimation}
                className="mt-[10px] text-[14px]"
              >
                {t("aboutPageSecond")}
              </motion.p>
              <motion.p
                variants={textAnimation}
                className="mt-[10px] text-[14px]"
              >
                {t("aboutPageThird")}
              </motion.p>
              <motion.p
                variants={textAnimation}
                className="mt-[10px] text-[14px]"
              >
                {t("aboutPageFourth")}
                <p className="mt-[10px]">{t("aboutPageFifth")}</p>

                <p className="mt-[10px]">{t("aboutPageSixth")}</p>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
