"use client"
import { links } from '@/constans/links';
import { GoToElement } from '@/customHooks/GoToElement';
import React from 'react'


export const Footer = () => {
    return (
        <div>
            <footer className="footer bg-white text-black p-10">
                <ul className="flex flex-row gap-4 items-center">
                    {links.map((text, index) => {
                        return (
                            <li
                                onClick={() => GoToElement(text.link)}
                                className="p-2"
                                key={index}
                            >
                                <>{text.name}</>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    <li className="footer-title">Contacto</li>
                    <li className="link link-hover">fixantconsultan@gmail.com</li>
                </ul>

            </footer>

            <div className='footer bg-white text-green-700 border-base-300 border-t px-10 py-4'>

            </div>

            <aside className="footer footer-center bg-white text-black p-5  ">
                <p>Copyright © {new Date().getFullYear()} - Todos los derechos reservados a Fixant</p>
            </aside>

        </div>
    )
}
