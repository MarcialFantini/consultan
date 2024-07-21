import { StaticImageData } from "next/image";
import { WeMakeItem } from "../WeMakeItem";

const makeItem: {
  src: string | StaticImageData;
  title: string;
  text: string;
}[] = [
  {
    src: "path/to/image1.jpg",
    title: "Landing Pages Personalizadas",
    text: "Nuestras páginas de aterrizaje están diseñadas para captar la atención desde el primer momento y convertir visitantes en clientes. Con una optimización SEO impecable, un diseño visualmente atractivo y llamadas a la acción claras, potenciamos tus campañas de marketing para que alcances y superes tus objetivos comerciales.",
  },
  {
    src: "path/to/image2.jpg",
    title: "Blogs Profesionales",
    text: "Transforma tu sitio web en un centro de contenido con nuestros blogs profesionales. Fáciles de actualizar y perfectamente integrados, estos blogs están optimizados para SEO, atrayendo tráfico orgánico de alta calidad. Mejora tu posición en los motores de búsqueda y construye una comunidad leal en torno a tu marca con contenido relevante y valioso.",
  },
  {
    src: "path/to/image3.jpg",
    title: "Ecommerce Personalizado",
    text: "Lleva tu negocio al siguiente nivel con nuestras soluciones de ecommerce personalizadas. Diseñamos tiendas virtuales atractivas y seguras, con gestión de inventario eficiente y múltiples métodos de pago. Expande tu mercado y ofrece a tus clientes una experiencia de compra cómoda y satisfactoria, aumentando tus ventas y fidelizando a tus clientes.",
  },
];

export const WeMake = () => {
  return (
    <section className="bg-[#F7F7FA] py-4  my-2 ">
      <h2 className="my-[60px] flex flex-col text-center text-2xl lg:text-[50px] gap-4">
        <span className="font-bold"> Nuestros paquetes Web</span>
      </h2>

      <div className=" py-4 flex flex-col gap-8">
        {makeItem.map((item, index) => {
          return <WeMakeItem item={item} key={index + "make"}></WeMakeItem>;
        })}
      </div>
    </section>
  );
};
