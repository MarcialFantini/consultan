"use client";
import { links, linksEnums } from "@/constans/links";
import { GoToElement } from "@/customHooks/GoToElement";
import React from "react";

export const Footer = () => {
  return (
    <footer id={linksEnums.CONTACT_US}>
      <div className="w-full  text-black grid lg:grid-cols-2 ">
        <ul className="flex flex-col gap-4 items-center lg:justify-center lg:flex-row">
          {links.map((text, index) => {
            return (
              <li
                onClick={() => GoToElement(text.link)}
                className="p-2"
                key={index}
              >
                <button className="font-bold">{text.name}</button>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-4">
          <li className="font-bold text-lg">Contacto:</li>
          <li className="link link-hover">
            <a href="mailto:fixantconsultan@gmail.com">
              <button>fixantconsultan@gmail.com</button>
            </a>
          </li>
        </ul>
      </div>

      <div className=" bg-white text-green-700 border-base-300 border-t px-10 py-4"></div>

      <aside className=" bg-white text-black p-5  ">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - Todos los derechos reservados
          a Fixant
        </p>
      </aside>
    </footer>
  );
};
