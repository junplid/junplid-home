import { ComponentArticle } from "./components/Article";
import Imagem1 from "../../../public/imagem-project-1.jpg";
import Imagem2 from "../../../public/imagem-project-2.jpg";
import Imagem3 from "../../../public/imagem-project-3.jpg";

export const metadata = {
  title: "Projetos - Junplid",
  description:
    "Aqui estão alguns trabalhos profissionais desenvolvidos por mim",
};

export default function Projects() {
  return (
    <main className='max-w-lg m-auto'>
      <h1 className='text-4xl mb-6 font-medium'>Projetos</h1>
      <p className={`text-base text-neutral-500`}>
        Meus projetos paralelos de código aberto e outras coisas que construí
        com meus colegas de trabalho
      </p>

      <div className='my-4 grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
        <ComponentArticle
          image={Imagem3}
          links={{}}
          language={{
            name: "Typescript",
            color: "bg-sky-800",
          }}
          listTec={["Node.js", "MongoDb", "Docker"]}
          title='Bot telegram'
          desc='Cria pedido de pagamento, notifica 3 dias antes da assinatura expirar, remove inadimplentes.'
        />
        <ComponentArticle
          image={Imagem1}
          links={{
            demo: "https://alianza-junplid-rian.vercel.app/",
            github: "https://github.com/ousadojunplid/alianza",
            figma:
              "https://www.figma.com/file/h589Or4MGF4ZChWCfO1Fpl/Alianza?type=design&node-id=65%3A419&t=uDJgckrY5MnFuGMz-1",
          }}
          language={{
            name: "Typescript",
            color: "bg-sky-800",
          }}
          listTec={["Next.js", "TailwindCSS"]}
          title='Alianza'
          desc='Site comunitário de ajuda a povos de extrema pobreza, catástrofes naturas e guerras.'
        />
        <ComponentArticle
          image={Imagem2}
          links={{
            github: "https://github.com/ousadojunplid/.ousadojunplid",
          }}
          language={{
            name: "Typescript",
            color: "bg-sky-800",
          }}
          listTec={["Next.js", "TailwindCSS"]}
          title='Portfólio'
          desc='Minha 🏠 minimalista na ☁️'
        />
      </div>
    </main>
  );
}
