import Image from "next/image";

export const CardServicesItem = ({
  item,
}: {
  item: { title: string; text: string; srcImage: string };
}) => {
  return (
    <article className=" bg-white shadow-lg border-[#57007B] border-2 rounded-xl flex flex-col p-4 gap-4 justify-start items-start">
      <picture className=" rounded-full border-[#57007B] border-2 p-2">
        <Image src={item.srcImage} alt="logo services"></Image>
      </picture>
      <h3 className=" text-[#57007B]">Web Design & Development</h3>
      <p className=" text-[#4A5568]">
        A Website is an extension of yourself and we can help you to express it
        properly. Your website is your number one marketing asset because we
        live in a digital age.
      </p>
    </article>
  );
};
