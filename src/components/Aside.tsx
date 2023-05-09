'use client'

import { usePathname } from "next/navigation";
import ComponentButton from "./Button"

export function ComponentAside() {
  const page_active = usePathname();

  return (
    <div className='mr-1 md:mr-0 md:gap-y-2 gap-x-2 flex md:flex-col'>
      <ComponentButton value='Casa' active={page_active === '/'} link='/' />
      <ComponentButton value='Sobre' active={page_active === '/about'} link='/about' />
      <ComponentButton value='Projetos' active={page_active === '/projects'} link='/projects' />
      <ComponentButton value='Habilidades' active={page_active === '/skills'} link='/skills' />
    </div>
  )
}