"use client";
import { links } from "@/constans/links";
import { motion, SVGMotionProps, Variants } from "framer-motion";
import { JSX, RefAttributes, useState } from "react";

const variants: Variants = {
  close: {
    transform: "translate(-100%)",
    transition: {
      damping: 24,
    },
  },
  open: {
    transform: "translate(0%)",
    transition: {
      damping: 24,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  close: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const NavMobile = () => {
  const [state, setState] = useState(false);

  const handlerToggle = () => setState(!state);

  return (
    <>
      <motion.button
        animate={state ? "open" : "closed"}
        className="lg:hidden bg-white rounded-full aspect-square p-5 self-end"
        onClick={handlerToggle}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.button>

      <motion.div
        variants={variants}
        animate={!state ? "close" : "open"}
        initial={{ left: 0 }}
        className=" lg:hidden bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 h-[100%] w-[90%] flex flex-col fixed top-0"
      >
        <motion.button
          animate={state ? "open" : "closed"}
          className=" absolute top-3 right-3 bg-white rounded-full aspect-square p-5 self-end"
          onClick={handlerToggle}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 18%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 18%)"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 18%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.button>
        <motion.nav className=" flex items-center w-full h-full mx-auto ">
          <motion.ul
            variants={{
              open: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              close: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className="w-full  flex flex-col gap-10  "
          >
            {links.map((items, index) => {
              return (
                <motion.li
                  variants={itemVariants}
                  className=" px-4 text-3xl font-bold  "
                  key={items + index}
                >
                  {items}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.nav>
      </motion.div>
    </>
  );
};
