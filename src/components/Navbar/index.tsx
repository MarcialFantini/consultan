import Image from "next/image";
import srcImage from "../../../public/vercel.svg";
import { links } from "@/constans/links";
import { NavMobile } from "../NavMobile";

export const NavbarComponent = () => {
  return (
    <header className=" z-50 relative top-0 flex flex-row justify-around p-4 shadow-lg">
      <div className="flex flex-row items-center">
        <picture>
          <Image src={srcImage} alt=""></Image>
        </picture>
        <h1 className=" text-xl font-bold">Company</h1>
      </div>

      <nav className="hidden lg:flex items-center justify-center ">
        <ul className="flex flex-row gap-4 items-center">
          {links.map((text, index) => {
            return <li key={index + text}>{text}</li>;
          })}
        </ul>
      </nav>
      <button
        style={{
          background:
            "rgb(102,117,247) linear-gradient(225deg, rgba(102,117,247,1) 0%, rgba(87,0,123,1) 100%)",
        }}
        className=" hidden lg:flex text-white py-2 px-4 rounded-lg"
      >
        Contact Us
      </button>

      <NavMobile></NavMobile>
    </header>
  );
};
