import { Variants } from "framer-motion";

export const variantItems: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",

      duration: 0.5,

      staggerChildren: 0.5,
    },
  },
};

export const itemsChildren: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

export const itemRightVariant: Variants = {
  offscreen: {
    opacity: 0,
    transform: "translate(100%)",
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
    transform: "translate(0px)",
  },
};

export const itemLeftVariant: Variants = {
  offscreen: {
    opacity: 0,
    transform: "translate(-100%)",
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
    transform: "translate(0px)",
  },
};

export const ServicesItemsVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    transform: "translate(30px)",
  },
  onscreen: {
    scale: [1, 1.5, 1],
    opacity: 1,
    transform: "translate(0px)",

    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};

export const itemsText: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0,

    x: -50,
  },
  onscreen: {
    opacity: 1,

    transition: {
      delay: 0.3,
      staggerChildren: 0.4,
    },
    scale: 1,
    x: 0,
  },
};

export const itemText: Variants = {
  offscreen: {
    opacity: 0,

    x: -50,
  },
  onscreen: {
    opacity: 1,

    x: 0,
  },
};
