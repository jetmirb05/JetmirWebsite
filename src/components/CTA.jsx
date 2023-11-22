import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ContainerAnimation, itemAnimation } from "../utils/motion";
import { useTranslation } from "react-i18next";

export const CTA = ({ bgImage, bgColor }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`w-screen bg-no-repeat bg-cover relative flex sm:justify-end items-center h-[76vh]  `}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="bg-gradient-to-t from-transparent to-black w-[100vw] h-[100%] bg-opacity-10 absolute z-1"></div>
        <motion.div
          variants={ContainerAnimation}
          initial="hidden"
          whileInView="show"
          className={`bg-${bgColor} sm:mr-24  ml-24 mr-5 w-[469px] sm:h-[461px] h-[400px] rounded-3xl z-10`}
        >
          <div className="flex flex-col w=[96%] h-[96%] m-[8%]">
            <motion.div
              variants={itemAnimation}
              className="text-black text-base leading-9 font-medium "
            >
              {t("CTAtitle")}
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="text-black font-black text-[30px] sm:text-4xl  sm:mt-10 mt-[10px] sm:leading-[50px] leading-[30px]"
            >
              {t("CTAslogan")}
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className="sm:mt-[50px] mt-[30px] text-black font-poppins text-sm leading-4 "
            >
              {t("CTAdescription")}
            </motion.div>
            <motion.div variants={itemAnimation}>
              <Link
                to="../Contact"
                title="Contact"
                onClick={() => scrollTo(0, 0)}
                className="font-semibold bg-black text-thorwhite h-[50px] rounded-2xl flex justify-center items-center sm:mt-16 mt-[30px] w-[100%] hover:bg-white hover:text-black"
              >
                {t("CntUs")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Commit for vercel */}
    </>
  );
};
export default CTA;
