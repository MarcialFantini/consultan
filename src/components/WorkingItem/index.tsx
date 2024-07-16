import Image, { StaticImageData } from "next/image";
import srcStars from "./Group 3.png";

export const WorkingItem = ({
  item,
}: {
  item: { src: string | StaticImageData; active: boolean };
}) => {
  return (
    <article
      style={{ opacity: !item.active ? 0.4 : 1 }}
      className=" transition-all flex flex-col gap-2 items-center justify-center"
    >
      <picture>
        <Image src={item.src} alt="image of customers working"></Image>
      </picture>
      <picture>
        <Image src={srcStars} alt=" stars of customers"></Image>
      </picture>
      <h4>Romeena De Silva</h4>
      <p>Software Engineer</p>
    </article>
  );
};
