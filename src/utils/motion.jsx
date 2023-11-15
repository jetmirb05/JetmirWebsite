export const RouteAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
  },
};

export const ContainerAnimation = {
  hidden: { opacity: 0 },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 ,  duration: 0.4,
      ease: "easeIn"},
  }),
 
};

export const itemAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    },
  },
};

// *! nav animations
export const NavContainerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const NavItemAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

// *!end of nav animations

export const textAnimation = {

    hidden : {
        opacity: 0 ,
        y : 100
    },
    show: {
        opacity: 1,
        y: 0 ,
        transition: {
            type: 'spring',
            ease: 'easeIn',
        }
    } ,
};
export const LtRtextAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration:0.5
    },
  },
};

export const imageAnimation = {
  hidden: {
    opacity: 0,

  },
  show: {
    opacity: 1,
  
    transition: {
      duration:0.5
    },
  },
};
