import srcImage from "./Rectangle 17.png";
import { WayItem } from "../WayItem";
import { StaticImageData } from "next/image";
import srcPlaning from "../../../public/image/home/planing.webp";
import srcDeveloping from "../../../public/image/home/developing.webp";
import srcTeam from "../../../public/image/home/team.webp";
import { linksEnums } from "@/constans/links";

const arr: {
  src: string | StaticImageData;
  title: string;
  text1: string;
  text2: string;
  frase: string;
}[] = [
  {
    src: srcPlaning,
    title: "Nuestra forma de trabajo",
    text1: "Analizamos tu negocio y proponemos mejoras",
    text2: "Llevando a cabo todo con las mejores practicas",
    frase:
      "En primera instancia es fundamental el análisis completo del negocio para poder llegar a soluciones y mejoras precisas.",
  },
  {
    src: srcDeveloping,
    title: "Desarrollo Personalizado",
    text1: "Creamos soluciones a medida",
    text2: "Nos concentramos en tu negocio y tu visión",
    frase:
      "Nuestros desarrolladores se sumergen en tu visión, asegurando que cada línea de código se alinee con tus objetivos. Este enfoque personalizado fomenta la innovación y la eficiencia, llevando a resultados excepcionales.",
  },
  {
    src: srcTeam,
    title: "Equipo Dedicado",
    text1: "Expertos a tu disposición",
    text2: "Especializados en el mundo de la web",
    frase:
      "Contamos con un equipo de profesionales altamente cualificado, donde cada integrante es especialista en su campo.",
  },
];

export const WayOfBuilding = () => {
  return (
    <section
      id={linksEnums.HOW_WE_WORK}
      className="  max-w-[1400px] w-[95%] m-auto overflow-hidden p-6"
    >
      <h2 className="my-[60px] flex flex-col text-center text-2xl lg:text-[50px] gap-4">
        Nuestro plan de trabajo
        <span className="font-bold">Para cumplir tu meta</span>
      </h2>

      <div className="flex flex-col gap-8">
        {arr.map((item, index) => {
          return (
            <WayItem
              key={index + " way of building"}
              item={item}
              index={index}
            ></WayItem>
          );
        })}
      </div>
    </section>
  );
};
