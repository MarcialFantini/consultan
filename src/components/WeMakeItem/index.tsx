import Image from "next/image";
import srcImage from "./Case-study__image.png";

export const WeMakeItem = () => {
  return (
    <article className=" rounded-2xl bg-[#F1F2FF] grid sm:grid-cols-2 max-w-[1300px] w-[95%] m-auto">
      <picture className="flex">
        <Image
          className="w-full h-full object-cover"
          src={srcImage}
          alt="image of projects makes"
        ></Image>
      </picture>

      <header className=" flex flex-col  gap-8 p-8">
        <h3 className=" text-xl font-bold">Website Design for SCFC Canada</h3>
        <p>
          Born out of a vision, a single-minded objective that puts service
          before anything else, Swift Clearance and Forwarding Corp. surging
          forth to deliver the best services in the shipping and logistics
          scenario. Its meteoric rise stems out of a solid foundation. The
          management boasts of over 20 years of rich and varied experience in
          the shipping and freight forwarding industry.
        </p>
        <button className="text-purple-500 self-end">Read more {">"}</button>
      </header>
    </article>
  );
};