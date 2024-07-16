import srcImage from "./Rectangle 17.png";
import { WayItem } from "../WayItem";

const arr = [srcImage, srcImage, srcImage];

export const WayOfBuilding = () => {
  return (
    <section className="p-8 bg-white max-w-[1400px] w-[95%] m-auto  ">
      <h2 className="my-[60px] flex flex-col text-center text-2xl">
        Way of building<span className="font-bold">Great Software</span>
      </h2>

      <div className="flex flex-col gap-8">
        {arr.map((item, index) => {
          return (
            <WayItem
              key={item.src + index + " way of building"}
              item={{ src: item, toggle: index % 2 === 0 }}
            ></WayItem>
          );
        })}
      </div>
    </section>
  );
};
