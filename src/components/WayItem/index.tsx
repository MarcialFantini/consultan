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
}: {
  item: { src: string | StaticImport; toggle: boolean; index: number };
}) => {
  return (
    <motion.article
      variants={variantItems}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex flex-col lg:flex-row w-full items-center justify-evenly ${
        item.toggle ? "lg:flex-row" : "lg:flex-row-reverse"
      } `}
    >
      <motion.header
        variants={itemsText}
        className=" flex flex-col gap-6 max-w-[500px]"
      >
        <motion.h3 variants={itemText} className="text-xl font-bold ">
          Build the right team to scale
        </motion.h3>
        <motion.p variants={itemText} className="text-[#2D3748]">
          Finding the right talent is not easy. We help you find the talent that
          suits your needs, follows your processes, and sticks with you long
          term not the case with freelancers
        </motion.p>

        <motion.p variants={itemText} className="text-[#2D3748]">
          Our <span className=" text-purple-500">delivery model</span> helps you
          cut costs and deliver within budget.
        </motion.p>

        <motion.p
          variants={itemText}
          className="text-purple-500 pl-4 border-l-2 border-purple-500 "
        >
          {`"Simform is quick to identify larger problem with the Software so we
          decided to expand our scope to build new modules"`}
        </motion.p>
      </motion.header>
      <motion.picture
        variants={item.index % 2 !== 0 ? itemRightVariant : itemLeftVariant}
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
