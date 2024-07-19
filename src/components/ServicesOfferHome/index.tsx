"use client";
import { ServicesItemsVariant, variantItems } from "@/Varians/homePage";
import { CardServicesItem } from "../CardServicesItem";
import { services } from "./dataServices";
import { motion } from "framer-motion";

export const ServicesOfferHome = () => {
  return (
    <motion.div
      whileInView="onscreen"
      initial="offscreen"
      viewport={{ once: true, amount: 0.9 }}
      className="bg-[#F5F5F5]"
    >
      <section className="w-[95%] max-w-[1400px] m-auto py-8 overflow-hidden">
        <motion.h2
          variants={ServicesItemsVariant}
          className=" text-2xl lg:text-[50px] font-bold text-center my-8 "
        >
          Services we offer
        </motion.h2>

        <div className="grid items-center justify-center">
          <motion.div
            variants={variantItems}
            className="grid sm:grid-cols-2 lg:grid-cols-4 flex-row gap-4"
          >
            {services.map((item, index) => {
              return (
                <CardServicesItem
                  key={index + "services"}
                  item={item}
                ></CardServicesItem>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
