"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { FcBusinessman, FcFolder, FcHome, FcIdea } from "react-icons/fc";
import { RiMenuFill } from "react-icons/ri";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import AnimationMainSection1Component from "./Animation";
import ComponentButton from "./Button";

export const RenderComponent = ({
  children,
}: {
  children: JSX.Element | ReactNode;
}) => {
  const [load, setLoad] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const page_active = usePathname();

  return (
    <div className='w-full h-full'>
      <div
        className={`${
          !load ? "flex" : "hidden"
        } fixed bg-white w-screen h-screen z-50 items-center justify-center`}
      >
        <AnimationMainSection1Component onComplete={setLoad} />
      </div>
      <div
        className={`${
          load ? "opacity-1" : "opacity-0"
        } duration-300 pt-8 md:pt-28 px-3`}
        style={{
          minHeight: "calc(100vh - 76px)",
        }}
      >
        <div className='md:flex py-2 gap-x-10 max-w-2xl m-auto'>
          <div className='gap-2 w-full md:sticky md:top-6 md:h-72 md:flex-col flex justify-end sm:justify-start flex-row-reverse sm:flex-row sm:items-center md:items-start gap-x-1'>
            <span className='text-5xl md:mb-5'>🧢</span>
            <button
              className='sm:hidden block'
              onClick={() => setOpenMenu(!openMenu)}
            >
              <RiMenuFill size={23} />
            </button>
            <div>
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
            </div>
          </div>
          <main className='mt-6 md:mt-0'>{children}</main>
        </div>
      </div>
      <div>
        <Sidebar
          onBackdropClick={() => setOpenMenu(!openMenu)}
          toggled={openMenu}
          backgroundColor='#fff'
          breakPoint='always'
        >
          <div className='w-full p-5 pt-7 text-lg'>
            <strong className='font-semibold'>Rian Junplid</strong>
          </div>
          <Menu>
            <MenuItem
              onClick={() => setOpenMenu(false)}
              icon={<FcHome />}
              component={<Link href={"/"} />}
            >
              Casa
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMenu(false)}
              icon={<FcBusinessman />}
              component={<Link href={"/about"} />}
            >
              Sobre
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMenu(false)}
              icon={<FcFolder />}
              component={<Link href={"/projects"} />}
            >
              Projetos
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMenu(false)}
              icon={<FcIdea />}
              component={<Link href={"/skills"} />}
            >
              Habilidades
            </MenuItem>
          </Menu>
        </Sidebar>
        {/* <div
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
        </aside> */}
      </div>
      <footer
        className={`${
          load ? "opacity-1" : "opacity-0"
        } duration-300 bg-slate-200 mt-3`}
      >
        <div className='max-w-4xl m-auto flex justify-center h-16 items-center'>
          <small>
            Copyright © 2023 • Jornada de programação de Rian Junplid
          </small>
        </div>
      </footer>
    </div>
  );
};
