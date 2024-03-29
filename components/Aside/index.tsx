"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ComponentButton from "../Button";
import "./styles.scss";

export function ComponentAside() {
  const page_active = usePathname();

  const [open, setOpen] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      setOpacity(open ? "opacity" : "");
    }, 200);
  }, [open]);

  return (
    <header>
      <nav className='mr-1 md:mr-0 md:gap-y-2 gap-x-2 sm:flex md:flex-col hidden'>
        <ComponentButton
          value='Casa'
          active={page_active === "/"}
          link='/'
          theme='primary'
        />
        <ComponentButton
          value='Sobre'
          active={page_active === "/about"}
          link='/about'
          theme='primary'
        />
        <ComponentButton
          value='Projetos'
          active={page_active === "/projects"}
          link='/projects'
          theme='primary'
        />
        <ComponentButton
          value='Habilidades'
          active={page_active === "/skills"}
          link='/skills'
          theme='primary'
        />
      </nav>
      <div className='sm:hidden block'>
        <div
          onClick={() => setOpen(!open)}
          className={`fixed z-30 cursor-pointer right-4 p-2 -translate-y-1/2 ${
            open ? "menu-active" : ""
          }`}
        >
          <div className='bar top bg-blue-700'></div>
          <div className='bar middle bg-blue-700'></div>
          <div className='bar bottom bg-blue-700'></div>
        </div>
        <aside
          onClick={() => setOpen(false)}
          className={`flex justify-end w-screen fixed menu-content duration-300 ease-in top-0 h-screen ${opacity} ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <nav className='nav-shadow w-3/4 bg-blue-700 pt-28 px-4'>
            <ul className='flex w-full flex-col items-center'>
              <ComponentButton
                value='Casa'
                active={page_active === "/"}
                link='/'
                theme='secondary'
              />
              <ComponentButton
                value='Sobre'
                active={page_active === "/about"}
                link='/about'
                theme='secondary'
              />
              <ComponentButton
                value='Projetos'
                active={page_active === "/projects"}
                link='/projects'
                theme='secondary'
              />
              <ComponentButton
                value='Habilidades'
                active={page_active === "/skills"}
                link='/skills'
                theme='secondary'
              />
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
}
