"use client";
import {
  itemLeftVariant,
  itemRightVariant,
  itemsText,
  itemText,
  variantItems,
} from "@/Varians/homePage";
import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const WayItem = ({
  item,
  index,
}: {
  item: {
    src: string | StaticImport;
    title: string;
    text1: string;
    text2: string;
    frase: string;
  };

  index: number;
}) => {
  return (
    <motion.article
      variants={variantItems}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex flex-col lg:flex-row w-full items-center justify-evenly py-4 ${
        index % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } `}
    >
      <motion.header
        variants={itemsText}
        className=" flex flex-col gap-3 max-w-[500px]"
      >
        <motion.h3 variants={itemText} className="text-[32px] font-bold ">
          {item.title}
        </motion.h3>
        <motion.p variants={itemText} className="text-[#2D3748] text-[24px]">
          {item.text1}
        </motion.p>

        <motion.p variants={itemText} className="text-[#2D3748] text-[24px]">
          {item.text2}
        </motion.p>

        <motion.p
          variants={itemText}
          className="text-purple-500 pl-4 border-l-2 border-purple-500 "
        >
          {item.frase}
        </motion.p>
      </motion.header>
      <motion.picture
        variants={index % 2 !== 0 ? itemRightVariant : itemLeftVariant}
        className="max-h-[300px] rounded-lg overflow-hidden shadow-lg "
      >
        <Image
          className="w-full h-full object-cover"
          src={item.src}
          alt="image of team "
        ></Image>
      </motion.picture>
    </motion.article>
  );
};
