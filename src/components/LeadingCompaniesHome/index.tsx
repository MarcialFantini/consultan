import Image from "next/image";
import srcImage from "./Abou-us-Video.png";

export const LeadingCompaniesHome = () => {
  return (
    <section className="w-[95%] max-w-[1400px] m-auto py-[80px]">
      <article className="grid lg:grid-cols-2">
        <header className="w-[95%] flex flex-col justify-start items-start gap-[50px]">
          <h2
            className="text-2xl flex flex-col "
            id="leading-companies-heading "
          >
            Leading companies trust us{" "}
            <span className="font-bold">to develop software</span>
          </h2>
          <p className="flex flex-col ">
            <span>
              We{" "}
              <span className="text-purple-500">add development capacity</span>{" "}
              to tech teams. Our value isn’t
            </span>{" "}
            <span>
              limited to building teams but is equally distributed across the
            </span>
            <span>project lifecycle. We are a custom software development</span>{" "}
            <span>
              {" "}
              company that guarantees the successful delivery of your project.
            </span>
          </p>
          <button aria-label="See more information">
            <span className="text-purple-500">See more Information {"->"}</span>
          </button>
        </header>
        <picture className="max-h-[350px]">
          <Image
            className="object-contain w-full h-full"
            src={srcImage}
            alt="Descriptive alternative text"
          />
        </picture>
      </article>
    </section>
  );
};
