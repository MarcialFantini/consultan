import Image from "next/image";
import { motion } from "framer-motion";
import { itemsChildren } from "@/Varians/homePage";

export const CardServicesItem = ({
  item,
}: {
  item: { title: string; text: string; srcImage: string };
}) => {
  return (
    <motion.article
      variants={itemsChildren}
      className=" bg-white shadow-lg border-[#57007B] border-solid rounded-xl flex flex-col p-4 gap-4 justify-start items-start"
    >
      <picture className=" rounded-full border-[#57007B] border-2 p-2">
        <Image src={item.srcImage} alt="logo services"></Image>
      </picture>
      <h3 className=" text-[#57007B] text-[24px] ">{item.title}</h3>
      <p className="  text-[#4A5568]">{item.text}</p>
    </motion.article>
  );
};
