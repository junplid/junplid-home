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
      <h1 className={`text-4xl font-medium mb-6`}>Rian Junplid</h1>
      <div className='gap-y-6 flex flex-col'>
        <p className={`leading-7 text-base text-neutral-500`}>
          A web é incrível. Qualquer um pode se tornar um desenvolvedor,
          escritor ou criador – e ninguém precisa pedir permissão. Você pode
          apenas constroi.
        </p>
        <i className={`leading-7 text-base text-neutral-500`}>
          - Comecei este site para documentar e compartilhar meu conhecimento e
          experiências ao longo da minha jornada de desenvolvedor de software.
        </i>
      </div>
    </main>
  );
}
