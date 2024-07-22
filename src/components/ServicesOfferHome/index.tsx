"use client";
import { ServicesItemsVariant, variantItems } from "@/Varians/homePage";
import { CardServicesItem } from "../CardServicesItem";
import { services } from "./dataServices";
import { motion } from "framer-motion";
import { linksEnums } from "@/constans/links";

export const ServicesOfferHome = () => {
  return (
    <motion.div
      id={linksEnums.SERVICES}
      whileInView="onscreen"
      initial="offscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-[#F5F5F5]"
    >
      <section className="w-[95%] max-w-[1400px] m-auto py-8 overflow-hidden">
        <motion.h2
          variants={ServicesItemsVariant}
          className=" text-2xl lg:text-[50px] font-bold text-center my-8 "
        >
          Nuestros Servicios
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
