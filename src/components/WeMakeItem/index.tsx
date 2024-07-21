"use client";
import Image, { StaticImageData } from "next/image";
import srcImage from "./Case-study__image.png";
import { motion } from "framer-motion";
import { itemsText, variantItems } from "@/Varians/homePage";

export const WeMakeItem = ({
  item,
}: {
  item: {
    src: string | StaticImageData;
    title: string;
    text: string;
  };
}) => {
  return (
    <motion.article
      initial="offscreen"
      variants={variantItems}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className=" shadow-lg rounded-2xl bg-[#F1F2FF] grid sm:grid-cols-2 max-w-[1300px] w-[95%] m-auto"
    >
      <motion.picture className="flex">
        <Image
          className="w-full h-full object-cover"
          src={srcImage}
          alt="image of projects makes"
        ></Image>
      </motion.picture>

      <motion.header variants={itemsText} className=" flex flex-col  gap-8 p-8">
        <h3 className=" text-[32px] font-bold">{item.title}</h3>
        <p className="text-[24px]">{item.text}</p>
        {/* <button className="text-purple-500 self-end">Read more {">"}</button> */}
      </motion.header>
    </motion.article>
  );
};
