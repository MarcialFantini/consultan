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
    title: "Nuestro Plan de Trabajo",
    text1: "Para cumplir tu meta",
    text2: "Construir el equipo adecuado para escalar",
    frase:
      "Encontrar el talento adecuado no es fácil. Te ayudamos a encontrar el talento que se adapta a tus necesidades, sigue tus procesos y se queda contigo a largo plazo, a diferencia de los freelancers.",
  },
  {
    src: srcDeveloping,
    title: "Desarrollo Personalizado",
    text1: "Creamos soluciones a medida",
    text2: "Soluciones de Software Personalizadas",
    frase:
      "Nuestros desarrolladores se sumergen en tu visión, asegurando que cada línea de código se alinee con tus objetivos. Este enfoque personalizado fomenta la innovación y la eficiencia, llevando a resultados excepcionales.",
  },
  {
    src: srcTeam,
    title: "Equipo Dedicado",
    text1: "Expertos a tu disposición",
    text2: "Equipos de Desarrollo Dedicados",
    frase:
      "Al construir equipos dedicados, aseguramos consistencia y una comprensión profunda de tu proyecto. Este modelo proporciona estabilidad y un entorno colaborativo, permitiéndonos entregar software de alta calidad a tiempo y dentro del presupuesto.",
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
