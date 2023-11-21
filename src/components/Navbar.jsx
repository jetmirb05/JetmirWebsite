import { useState, useEffect } from "react";
import Logo from "./../assets/pngegg.png";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";
import { Sling as Hamburger } from "hamburger-react";
import { animate, delay, motion } from "framer-motion";
import {
  NavContainerAnimation,
  ContainerAnimation,
  itemAnimation,
  NavItemAnimation,
} from "../utils/motion";
import { useTranslation } from "react-i18next";
// fucntion to concatnate tailwind classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  sq: { nativeName: "Albanian" },
  mk: { nativeName: "Macedonian" },
};
function getSelectedLanguage() {
  const storedLanguage = localStorage.getItem("selectedLanguage");
  return storedLanguage || "English";
}


export const Navbar = ({
  NavbarColor,
  TextColor,
  TextHoverColor,
  AfterColor,
}) => {
  // array of objects containing links

  //using this hook to translate
  const { t, i18n } = useTranslation();

  const links = [
    { name: t("home"), link: "/" },
    { name: t("about"), link: "/About" },
    { name: t("product"), link: "/Departments" },
   
  ];
  const Departmentlinks = [
    { name: t('mac'), link: "/MiningDep" },
    { name: t('ipad'), link: "/ConstructionDep" },
    { name: t('iphone'), link: "/RenewableEnergyDep" },
    { name: t('airpods'), link: "/ConsultingDep" },
    { name: t('watch'), link: "/#" },
    
  ];

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownHover, setDropDownHover] = useState(false);
  const [dropDownHover2, setDropDownHover2] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    getSelectedLanguage()
  );

  const hamburgerClick = () => {
    setShowMobileNav(!showMobileNav);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // when the users scroll make the navbar disaappear for better user experience.
    const handeleScroll = () => {
      setShowMobileNav(false);
      if (window.scrollY > 0) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handeleScroll);
    return () => {
      window.removeEventListener("scroll", handeleScroll);
    };
  }, [showMobileNav]);

  //after the user selects a different language it changes it
  useEffect(() => {
    if (selectedLanguage === "English") {
      i18n.changeLanguage("en");
    } else if (selectedLanguage === "Albanian") {
      i18n.changeLanguage("sq");
    } else {
      i18n.changeLanguage("mk");
    }
  }, [selectedLanguage]);

  return (
    <>
      {/* black overlay when showmobilenav is active */}
      <div
        className={
          showMobileNav
            ? " fixed w-full h-full bg-opacity-30 bg-thorblack z-[2] transition-all duration-600 opacity-100 lg:hidden"
            : " opacity-0 "
        }
      ></div>

      {/* desktopp navbar  */}
      <motion.div
        variants={ContainerAnimation}
        initial="hidden"
        animate="show"
        className=" h-20 lg:h-24 w-full shadow-sm bg-thorblack fixed top-0 z-50 flex flex-row justify-between items-center px-4 md:px-8 lg:px-10 xl:px-16 cursor-pointer"
      >
        <Link to="/">
        <motion.img onClick={()=>window.scrollTo(0,0)}
          variants={itemAnimation}
          src={Logo}
          alt="Thor Industries Logo"
          className="h-[40px] sm:h-[65px]"
        />
        </Link>

        {/* 
        start of mobile nav
        when showMobilenav is active the navbar will show only on mobiles and tablets  */}
        <div
          className={classNames(
            showMobileNav
              ? "fixed right-0 w-2/3 sm:w-1/3 h-[100vh]  "
              : "fixed w-2/3 sm:w-1/3 h-[100vh] right-[-100%] ",
            "transition-all duration-500 ease-in-out flex justify-center items-center gap-8 flex-col z-10 lg:hidden top-0",
            `${NavbarColor} `
          )}
        >
          <ul className="flex flex-col gap-4 items-center justify-center">
            <li className="px-4 py-2" onClick={()=>window.scrollTo(0,0)}>
              <NavLink
                to={links[0].link}
                className={({ isActive }) => {
                  return (
                    "text-xl font-semibold ease-in-out transition duration-500 " +
                    (isActive
                      ? " text-zinc-800 "
                      : "hover:text-zinc-800 text-white")
                  );
                }}
              >
                {links[0].name}
              </NavLink>
            </li>
            <li className="px-4 py-2" onClick={()=>window.scrollTo(0,0)}>
              <NavLink
                to={links[1].link}
                className={({ isActive }) => {
                  return (
                    "text-xl font-semibold ease-in-out transition duration-500 " +
                    (isActive
                      ? " text-zinc-800 "
                      : "hover:text-zinc-800 text-white")
                  );
                }}
              >
                {links[1].name}
              </NavLink>
            </li>
            <Menu as="li" className="relative">
              <div>
                <Menu.Button className="relative flex w-full justify-center items-center  font-semibold text-white group hover:text-zinc-800 transition-all duration-500 px-4 py-2">
                  <NavLink onClick={()=>window.scrollTo(0,0)}
                    to={links[2].link}
                    // className="text-white text-xl group-hover:text-zinc-800 font-semibold  ease-in-out transition duration-500"
                    className={({ isActive }) => {
                      return (
                        "text-xl font-semibold ease-in-out transition duration-500 " +
                        (isActive
                          ? " text-zinc-800 "
                          : "group-hover:text-zinc-800 text-white")
                      );
                    }}
                  >
                    {links[2].name}
                  </NavLink>
                  <ChevronDownIcon
                    className="ml-1 h-5 w-5 text-gray-400 flex justify-center items-center"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute top-10 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {Departmentlinks.map((department, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <NavLink
                            to={department.link} onClick={()=>window.scrollTo(0,0)}
                            className=" text-thorblack transition-all duration-500 block px-4 py-2 text-md font-medium"                          
                          >
                            {department.name}
                          </NavLink>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className="px-4 py-2" onClick={()=>window.scrollTo(0,0)}>
              <NavLink 
                to="/"
                className={({ isActive }) => {
                  return (
                    "text-xl font-semibold ease-in-out transition duration-500 " +
                    (isActive
                      ? " text-zinc-800 "
                      : "hover:text-zinc-800 text-white")
                  );
                }}
              >
                test
              </NavLink>
            </li>
            <Menu as="li">
              <div>
                <Menu.Button className="relative inline-flex w-full justify-center items-center gap-x-1.5 rounded-md  px-5 py-2  font-semibold text-white text-lg group hover:text-zinc-800 transition-all duration-500">
                  <GlobeEuropeAfricaIcon className="h-6 w-6 text-white group-hover:text-zinc-800 transition-all duration-500" />
                  {selectedLanguage}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-19 z-10 mt-2 w-170px origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item
                      onClick={() => {
                        setSelectedLanguage(
                          selectedLanguage === "Macedonian"
                            ? "Albanian"
                            : "Macedonian"
                        );
                        localStorage.setItem(
                          "selectedLanguage",
                          selectedLanguage === "Macedonian"
                            ? "Albanian"
                            : "Macedonian"
                        );
                        setIsOpen(false);
                        setShowMobileNav(false);
                      }}
                    >
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-zinc-600" : `${TextColor}`,
                            "transition-all duration-500 ",
                            "block px-4 py-2 text-md font-medium"
                          )}
                        >
                          {selectedLanguage === "Macedonian"
                            ? "Albanian"
                            : "Macedonian"}
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item
                      onClick={() => {
                        setSelectedLanguage(
                          selectedLanguage === "English"
                            ? "Albanian"
                            : "English"
                        );
                        localStorage.setItem(
                          "selectedLanguage",
                          selectedLanguage === "English"
                            ? "Albanian"
                            : "English"
                        );
                        setIsOpen(false);
                        setShowMobileNav(false);
                      }}
                    >
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-zinc-600" : `${TextColor}`,
                            "transition-all duration-500 ",
                            "block px-4 py-2 text-md font-medium"
                          )}
                        >
                          {selectedLanguage === "English"
                            ? "Albanian"
                            : "English"}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </ul>
          <li className="flex justify-center items-center">
            <NavLink
              to="/Contact"
              title="Contact"
              className={`btn-primary bg-zinc-800 font-semibold `}
              onClick={()=>window.scrollTo(0,0)}
            >
              {t("CntUs")}
            </NavLink>
          </li>
        </div>
        {/* end of mobile nav  */}

        {/* start  of desktop nav  */}
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-12 items-center">
            <motion.li variants={itemAnimation} onClick={()=>window.scrollTo(0,0)}>
              <NavLink 
                to={links[0].link}
                // className="relative block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600  after:w-0 after:rounded-lg after:left-0 after:bottom-[-10px] after:transition-all after:duration-500  after:hover:w-2/3 text-white text-lg hover:text-orange-600 ease-in-out transition duration-500 py-2"
                className={({ isActive }) => {
                  return (
                    `relative block after:content-[''] after:absolute after:h-[3px] ${AfterColor}  after:w-0 after:rounded-lg after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 text-lg ease-in-out transition duration-500 py-2 ` +
                    (isActive
                      ? ` after:w-full ${TextColor} `
                      : `text-white `)
                  );
                }}
              >
                {links[0].name}
              </NavLink>
            </motion.li>
            <motion.li variants={itemAnimation} onClick={()=>window.scrollTo(0,0)}>
              <NavLink
                to={links[1].link}
                // className="relative block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600  after:w-0 after:rounded-lg after:left-0 after:bottom-[-10px] after:transition-all after:duration-500  after:hover:w-2/3 text-white text-lg hover:text-orange-600 ease-in-out transition duration-500 py-2"
                className={({ isActive }) => {
                  return (
                    `relative block after:content-[''] after:absolute after:h-[3px] ${AfterColor}  after:w-0 after:rounded-lg after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 text-lg ease-in-out transition duration-500 py-2 ` +
                    (isActive
                      ? ` after:w-full ${TextColor} `
                      : `text-white  `)
                  );
                }}
              >
                {links[1].name}
              </NavLink>
            </motion.li>
            <Menu
              as="li"
              className="relative hidden md:block "
              onMouseEnter={() => setDropDownHover2(true)}
              onMouseLeave={() => setDropDownHover2(false)}
            >
              <motion.div variants={itemAnimation} onClick={()=>window.scrollTo(0,0)}>
                <Menu.Button className="flex justify-center items-center" >
                  <NavLink
                    to={links[2].link}
                    // className="relative block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600  after:w-0 after:rounded-lg after:left-0 after:bottom-[-10px] after:transition-all after:duration-500  after:hover:w-2/3 text-white text-lg hover:text-thororange ease-in-out transition duration-500 py-2"
                    className={({ isActive }) => {
                      return (
                        `relative block after:content-[''] after:absolute after:h-[3px] ${AfterColor}  after:w-0 after:rounded-lg after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 text-lg ease-in-out transition duration-500 py-2 ` +
                        (isActive
                          ? ` after:w-full ${TextColor} `
                          : `text-white  `)
                      );
                    }}
                  >
                    {links[2].name}
                  </NavLink>
                  <ChevronDownIcon
                    className="ml-2 h-5 w-5 text-zinc-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </motion.div>
              <Transition
                as={Fragment}
                show={dropDownHover2}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute  z-10 py-2 w-150px origin-top-right rounded-md bg-thorwhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:text-thororange">
                  <div className="py-1">
                    {Departmentlinks.map((department, index) => (
                      <Menu.Item key={index} onClick={()=>window.scrollTo(0,0)}>
                        {({ active }) => (
                          <NavLink 
                            to={department.link}
                            className={classNames(
                              active
                                ? `${TextColor}`
                                : "text-thorblack transition-all duration-500 ",
                              "block px-4 py-2 text-md font-medium"
                            )}
                          >
                            {department.name}
                          </NavLink>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* <li className="px-4 py-2" onClick={()=>window.scrollTo(0,0)}>
              <NavLink 
                to="/"
                className={({ isActive }) => {
                  return (
                    "text-xl font-semibold ease-in-out transition duration-500 " +
                    (isActive
                      ? " text-zinc-800 "
                      : "hover:text-zinc-800 text-white")
                  );
                }}
              >
                test
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className=" relative flex justify-center items-center gap-4">
          <Menu
            as="div"
            className=" hidden lg:block "
            onMouseEnter={() => setDropDownHover(true)}
            onMouseLeave={() => setDropDownHover(false)}
          >
            <motion.div variants={itemAnimation}>
              <Menu.Button
                className={`relative inline-flex w-full justify-center items-center gap-x-1.5 rounded-md  px-5 py-2  font-semibold text-white text-lg group ${TextHoverColor} transition-all duration-500`}
              >
                <GlobeEuropeAfricaIcon
                  className={`h-6 w-6 text-white  transition-all duration-500 group-${TextHoverColor}`}
                />
                {selectedLanguage}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </motion.div>
            <Transition
              as={Fragment}
              show={dropDownHover}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 py-2 w-150px origin-top-right rounded-md bg-thorwhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item
                    onClick={() => {
                      setSelectedLanguage(
                        selectedLanguage === "Macedonian"
                          ? "Albanian"
                          : "Macedonian"
                      );
                      localStorage.setItem(
                        "selectedLanguage",
                        selectedLanguage === "Macedonian"
                          ? "Albanian"
                          : "Macedonian"
                      );
                    }}
                  >
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? `${TextColor}`
                            : "text-thorblack transition-all duration-500 ",
                          "block px-4 py-2 text-md font-medium hover:text-thororange"
                        )}
                      >
                        {selectedLanguage === "Macedonian"
                          ? "Albanian"
                          : "Macedonian"}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => {
                      setSelectedLanguage(
                        selectedLanguage === "English" ? "Albanian" : "English"
                      );
                      localStorage.setItem(
                        "selectedLanguage",
                        selectedLanguage === "English" ? "Albanian" : "English"
                      );
                    }}
                  >
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? `${TextColor}`
                            : "text-thorblack transition-all duration-500",
                          "block px-4 py-2 text-md font-medium hover:text-thororange"
                        )}
                      >
                        {selectedLanguage === "English"
                          ? "Albanian"
                          : "English"}
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <motion.li
            variants={itemAnimation}
            className="flex justify-center items-center"
          >
            <NavLink
              to="/Contact"
              title="Contact"
              className={` btn-primary ${NavbarColor} hidden lg:block btn-primary`}
              onClick={()=>window.scrollTo(0,0)}
              style={{backgroundColor: 'black'}}
            >
              {t("CntUs")}
            </NavLink>
          </motion.li>
          <motion.span
            variants={itemAnimation}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="block lg:hidden text-white z-20 "
          >
            <Hamburger
              onToggle={hamburgerClick}
              toggled={isOpen}
              hideOutline={false}
            />
          </motion.span>
        </div>
        {/* end of desktop nav  */}
      </motion.div>
    </>
  );
};
export default Navbar;
