"use client";

import { ReactNode, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import AnimationMainSection1Component from "./Animation";
import { ComponentAside } from "./Aside";

export const RenderComponent = ({
  children,
}: {
  children: JSX.Element | ReactNode;
}) => {
  const [load, setLoad] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div>
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
            <ComponentAside setOpenMenu={setOpenMenu} openMenu={openMenu} />
          </div>
          <main className='mt-6 md:mt-0'>{children}</main>
        </div>
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
