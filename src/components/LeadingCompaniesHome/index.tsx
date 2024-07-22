"use client";
import Image from "next/image";
import srcImage from "./Abou-us-Video.png";
import { motion } from "framer-motion";
import { itemLeftVariant, itemRightVariant } from "@/Varians/homePage";
import { linksEnums } from "@/constans/links";

export const LeadingCompaniesHome = () => {
  return (
    <motion.section
      id={linksEnums.NOSOTROS}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="w-[95%] max-w-[1400px] m-auto py-[80px] overflow-hidden"
    >
      <article className="grid lg:grid-cols-2">
        <motion.header
          variants={itemLeftVariant}
          className="w-full flex flex-col justify-start items-start gap-[50px] max-w-[600px]  "
        >
          <h2 className="text-2xl lg:text-[50px] flex flex-col gap-4 ">
            <span className="font-bold"> Nosotros</span>
          </h2>
          <p className="text-[24px]">
            Transformamos en realidades tus{" "}
            <span className="text-purple-500">ideas</span> digitales. Ofreciendo
            soluciones innovadoras y personalizadas para tu negocio.
          </p>
        </motion.header>
        <motion.picture variants={itemRightVariant} className="max-h-[350px]">
          <Image
            className="object-contain w-full h-full"
            src={srcImage}
            alt="Descriptive alternative text"
          />
        </motion.picture>
      </article>
    </motion.section>
  );
};
