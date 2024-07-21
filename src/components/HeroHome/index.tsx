"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import srcImage from "../../../public/image/home/converted-0.webp";
import {
  itemRightVariant,
  itemsChildren,
  variantItems,
} from "@/Varians/homePage";

export const HeroHome = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="flex items-center justify-center"
    >
      <motion.article className="grid lg:grid-cols-2 items max-w-[1200px] overflow-hidden">
        <motion.header className=" h-full  flex flex-col p-4 justify-center items-center gap-4 ml-auto">
          <motion.div className="w-full " variants={variantItems}>
            <motion.h2
              variants={itemsChildren}
              className=" text-[42px] lg:text-[64px] "
            >
              <span className="flex flew-row gap-4">
                Soluciones <span className="text-[#DE4396]">Web </span>
              </span>
              <span className="flex gap-4 flex-row font-bold">
                Impulsa tu <span className="text-[#F7666F]"> Negocio</span>
              </span>
            </motion.h2>
            <motion.p
              variants={itemsChildren}
              className="text-[24px] text-[#4A5568]"
            >
              Te ayudamos a construir y gestionar un equipo de desarrolladores
              de clase mundial para hacer realidad tu visión.
            </motion.p>
            <motion.button
              variants={itemsChildren}
              className=" text-[24px] cursor-pointer bg-blue-500 p-2 text-white rounded-lg my-2 shadow-2xl shadow-blue-500"
            >
              {" ¡Hablemos!"}
            </motion.button>
          </motion.div>
        </motion.header>
        <motion.picture variants={itemRightVariant} className="w-full ">
          <Image
            priority={true}
            className="w-full h-full object-contain"
            src={srcImage}
            alt="main image"
          ></Image>
        </motion.picture>
      </motion.article>
    </motion.section>
  );
};
