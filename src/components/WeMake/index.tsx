import { WeMakeItem } from "../WeMakeItem";

const makeItem = ["", "", ""];

export const WeMake = () => {
  return (
    <section className="bg-[#F7F7FA] py-4">
      <h2 className="my-[60px] flex flex-col text-center text-2xl">
        Our recent <span className="font-bold">Case studies</span>
      </h2>

      <div className="flex flex-col gap-8">
        {makeItem.map((item, index) => {
          return <WeMakeItem key={index + "make"}></WeMakeItem>;
        })}
      </div>
    </section>
  );
};
