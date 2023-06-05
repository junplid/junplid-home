import { Metadata } from "next";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const metadata: Metadata = {
  title: "Sobre Mim - Junplid",
  description: "Um pouco sobre o Junplid Dev",
};

export default function About() {
  return (
    <main className='max-w-lg m-auto'>
      <h1 className={`text-4xl mb-6 font-medium`}>Sobre mim</h1>
      <div className={`gap-y-4 flex flex-col`}>
        <p className={`text-base text-neutral-500`}>
          Eu sou o Rian, mas a maioria das pessoas me conhece como{" "}
          <strong>Junplid</strong>
        </p>
        <ul>
          <li>👨‍💻 Criando interfaces e APIs desde 2019</li>
          <li>📚 Aprimorando minhas habilidades no idioma inglês.</li>
          <li>💡 Interesse em desenvolvimento Frontend e Backend</li>
        </ul>
        <p className={`leading-7 text-base text-neutral-500`}>
          Atualmente estou trabalhando como desenvolvedor freelancer, criando
          soluções web. Veja alguns de meus trabalhos em{" "}
          <Link
            href={"/projects"}
            className='text-sky-500 font-semibold underline underline-offset-4 hover:text-sky-400 duration-300'
          >
            Projetos
          </Link>
          .
        </p>
        <p className={`leading-7 text-base text-neutral-500`}>
          Eu amo construir para a web. De algo tão simples quanto um único
          arquivo HTML – até grandes aplicativos. A web é incrível. Qualquer um
          pode se tornar um desenvolvedor, escritor ou criador – e ninguém
          precisa pedir permissão. Você pode apenas construir.
        </p>
      </div>
      <h3 className={`text-2xl my-4`}>
        Breve linha do tempo da minha carreira
      </h3>
      <div>
        <p className={`leading-7 font-medium text-neutral-500`}>
          Full Stack Jr na{" "}
          <Link
            href={"https://slideworks.cc/#home"}
            target='_blank'
            className='text-sky-500 font-semibold underline underline-offset-4 hover:text-sky-400 duration-300'
          >
            Slideworks.cc
          </Link>
        </p>
        <i className={`text-neutral-500 text-sm`}>Jan/2021 - Out/2022</i>
        <ul className={`text-neutral-600 list-disc pl-5 mt-3`}>
          <li>
            Desenvolvedor Full Stack Júnior, Criar {"API's"} com Node.js
            utilizando Jest para os testes e Clean Architecture para estruturas
            escaláveis. ORM: Prisma. Banco de Dados: MySQL, MongoDb. No
            desenvolvimento Front-End: ReactJs, Next.js.
          </li>
        </ul>
      </div>
      <h3 className={`text-2xl mt-6`}>Contato</h3>
      <p className={`mb-4 text-base text-neutral-500`}>
        Entre em contato comigo através das minhas redes sociais:
      </p>
      <div className='flex gap-x-2 text-neutral-600'>
        <Link
          className='hover:text-neutral-700 duration-300'
          href={"https://github.com/ousadojunplid"}
        >
          <AiFillGithub size={25} />
        </Link>
        <Link
          className='hover:text-neutral-700 duration-300'
          href={"https://www.linkedin.com/in/rian-carlos-08675b275/"}
        >
          <AiFillLinkedin size={25} />
        </Link>
        <Link
          className='hover:text-neutral-700 duration-300'
          href={"mailto:ggrian.dev@gmail.com"}
        >
          <MdEmail size={25} />
        </Link>
      </div>
    </main>
  );
}
