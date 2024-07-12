import Image from "next/image";

const links = ["About us", "Services", "Blog", "How it works"];

export const NavbarComponent = () => {
  return (
    <header className=" relative top-0 flex flex-row justify-around p-4 shadow-lg">
      <div className="flex flex-row items-center">
        <picture>
          <Image src={""} alt=""></Image>
        </picture>
        <h1 className=" text-xl font-bold">Company</h1>
      </div>

      <nav className="flex items-center justify-center">
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
        className=" text-white py-2 px-4 rounded-lg"
      >
        Contact Us
      </button>
    </header>
  );
};
