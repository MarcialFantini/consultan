"use client";
import Image from "next/image";
import srcImage from "./Abou-us-Video.png";
import { motion } from "framer-motion";
import { itemLeftVariant, itemRightVariant } from "@/Varians/homePage";

export const LeadingCompaniesHome = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="w-[95%] max-w-[1400px] m-auto py-[80px] overflow-hidden"
    >
      <article className="grid lg:grid-cols-2">
        <motion.header
          variants={itemLeftVariant}
          className="w-full flex flex-col justify-start items-start gap-[50px]"
        >
          <h2 className="text-2xl lg:text-[50px] flex flex-col gap-4 ">
            Leading companies trust us
            <span className="font-bold">to develop software</span>
          </h2>
          <p>
            We <span className="text-purple-500">add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <button aria-label="See more information">
            <span className="text-purple-500">See more Information {"->"}</span>
          </button>
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
