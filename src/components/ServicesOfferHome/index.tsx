import { CardServicesItem } from "../CardServicesItem";
import srcImage from "../../../public/image/home/Code_perspective_matte.svg";

const services: { title: string; text: string; srcImage: string }[] = [
  {
    title: "Web Design & Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    srcImage: srcImage,
  },
  {
    title: "Web Design & Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    srcImage: srcImage,
  },
  {
    title: "Web Design & Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    srcImage: srcImage,
  },
  {
    title: "Web Design & Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    srcImage: srcImage,
  },
];

export const ServicesOfferHome = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <section className="w-[95%] max-w-[1400px] m-auto py-8">
        <h2 className="text-2xl font-bold text-center my-8 ">
          Services we offer
        </h2>

        <div className="grid items-center justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 flex-row gap-4">
            {services.map((item) => {
              return <CardServicesItem item={item}></CardServicesItem>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
