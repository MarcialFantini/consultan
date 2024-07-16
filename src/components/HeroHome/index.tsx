import Image from "next/image";
import srcImage from "../../../public/image/home/converted-0.webp";

export const HeroHome = () => {
  return (
    <section className="flex items-center justify-center">
      <article className="grid grid-cols-2 items max-w-[1200px]">
        <header className="  flex flex-col p-4 justify-center items-center gap-4 ml-auto">
          <div>
            <h2 className=" text-4xl ">
              Great <span className="text-[#DE4396]">Product</span> is
              <span className="flex gap-2 flex-row font-bold">
                built by great <span className="text-[#F7666F]"> teams</span>
              </span>
            </h2>
            <p>
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <button className=" cursor-pointer bg-blue-500 p-2 text-white rounded-lg my-2 shadow-2xl shadow-blue-500">
              {"Let’s get started!"}
            </button>
          </div>
        </header>
        <picture className="w-full ">
          <Image
            priority={true}
            className="w-full h-full object-contain"
            src={srcImage}
            alt="main image"
          ></Image>
        </picture>
      </article>
    </section>
  );
};
