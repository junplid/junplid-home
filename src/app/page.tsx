import { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Junplid Dev",
  description:
    "Olá 👋 Eu sou Junplid Develop Web, e aqui compartilho minha jornada de desenvolvimento de software",
};

export default function Page() {
  return (
    <main className='max-w-lg m-auto'>
      <h1 className={`text-4xl font-medium mb-6`}>Rian Carlos</h1>
      <div className='gap-y-6 flex flex-col'>
        <i className={`text-base text-neutral-500`}>
          "Cada obstaculo é uma oportunidade de crescimento"
        </i>
        <p className={`leading-7 text-base text-neutral-500`}>
          Apaixonado por tudo que é Javascript. Gosto de criar software de
          comércio eletrônico e coisas relacionadas ao desenvolvimento da web.
          Trabalho principalmente com <strong>Typescript</strong>,{" "}
          <strong>React</strong>, <strong>NodeJS</strong>,{" "}
          <strong>NextJS</strong>, e <strong>Cloud</strong>.
        </p>
        <p className={`leading-7 text-base text-neutral-500`}>
          Comecei este site para documentar e compartilhar meu conhecimento e
          experiências ao longo da minha jornada de desenvolvedor de software.
        </p>
      </div>
    </main>
  );
}
