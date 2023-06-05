import Image, { StaticImageData } from "next/image";
import { CgFigma } from "react-icons/cg";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface PropsArticle_I {
  title: string;
  listTec: string[];
  desc: string;
  image: StaticImageData;
  language: {
    name: string;
    color: string;
  };
  links: {
    demo?: string;
    github?: string;
    figma?: string;
  };
}

export function ComponentArticle(props: PropsArticle_I): JSX.Element {
  return (
    <article className='cursor-default flex flex-col hover:border hover:border-slate-950 transition-colors hover:p-0 p-px hover:bg-slate-200 bg-slate-100 duration-200'>
      <Image src={props.image} width={320} height={269} alt='imagem' />
      <div className='h-full flex flex-col justify-between'>
        <div className='mt-3 flex flex-col gap-y-2 py-1 p-2'>
          <h2 className='font-medium text-lg leading-none'>{props.title}</h2>
          <p className='leading-tigh text-sm line-clamp-3'>{props.desc}</p>
          <p className='text-sm'>
            Build with: <strong>{props.listTec.join(", ")}</strong>
          </p>
        </div>
        <div className='flex items-center justify-between p-2'>
          <div className='flex items-center gap-x-1'>
            <div className='h-4 w-4 bg-sky-800 rounded-full' />
            <span className='text-sm'>Typescript</span>
          </div>
          <div className='flex items-center gap-x-2 justify-between'>
            {props.links.demo && (
              <a
                target='_blank'
                title='Demonstração'
                href={props.links.demo}
                className='p-0.5'
              >
                <AiOutlineLink size={22} />
              </a>
            )}
            {props.links.github && (
              <a
                target='_blank'
                title='Github'
                href={props.links.github}
                className='p-0.5'
              >
                <AiFillGithub size={22} />
              </a>
            )}
            {props.links.figma && (
              <a
                target='_blank'
                title='Figma'
                href={props.links.figma}
                className='p-0.5'
              >
                <CgFigma size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
