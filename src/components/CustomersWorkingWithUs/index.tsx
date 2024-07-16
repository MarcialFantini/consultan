"use client";
import { ArticlesItemCustomers } from "../ArticlesItemCustomers";

import srcArrow from "../../../public/image/home/Btn-left.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WorkingItem } from "../WorkingItem";
import imgDefaultProfile from "./Group 2.png";

const commentaries = ["", "", "", "", ""];
export const CustomersWorkingWithUs = () => {
  const [step, setStep] = useState(0);

  const plus = () => {
    setStep((prevStep) => {
      if (prevStep + 1 > 4) {
        return 0;
      } else {
        return prevStep + 1;
      }
    });
  };

  const less = () => {
    setStep((prevStep) => {
      if (prevStep - 1 < 0) {
        return 4;
      } else {
        return prevStep - 1;
      }
    });
  };

  useEffect(() => {
    console.log({ left: `-${step * 100}%` });
  }, [step]);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center text-2xl flex flex-col">
        Why customers love <span className="font-bold"> working with us</span>
      </h2>
      <div className="flex flex-col relative justify-center max-w-[1000px] w-[90%] m-auto ">
        <div className="transition-all relative  overflow-hidden min-h-[300px] flex items-center">
          <div
            style={{ left: `${-step * 100}%` }}
            className=" absolute w-[500%]  flex flex-row transition-all "
          >
            {commentaries.map((item, index) => {
              return (
                <ArticlesItemCustomers
                  key={index + item + "commentary"}
                ></ArticlesItemCustomers>
              );
            })}
          </div>
          <button
            onClick={less}
            className=" bottom-4 absolute left-4 cursor-pointer"
          >
            <picture>
              <Image src={srcArrow} alt="button arrow left"></Image>
            </picture>
          </button>

          <button
            onClick={plus}
            className=" bottom-4 absolute right-4 rotate-180  cursor-pointer"
          >
            <picture>
              <Image src={srcArrow} alt="button arrow left"></Image>
            </picture>
          </button>
        </div>
        <div className=" flex flex-row items-center justify-center">
          {commentaries.map((item, index) => {
            return (
              <WorkingItem
                item={{ src: imgDefaultProfile, active: step === index }}
              ></WorkingItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};
