import './globals.css'
import { Montserrat } from 'next/font/google'
import { ComponentAside } from '@/components/Aside';

const montserrat300 = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`min-w-fit ${montserrat300.className} font-light min-h-screen flex flex-col justify-between`}>
        <div className='pt-8 md:pt-28 px-3'>
          <div className='md:flex py-2 gap-x-24 max-w-4xl m-auto'>
            <div className='md:sticky md:top-6 md:h-72 md:flex-col flex md:justify-normal justify-between items-center md:items-start gap-x-1'>
              <span className='text-5xl md:mb-5'>🧢</span>
              <ComponentAside />
            </div>
            <main className='mt-6 md:mt-0'>{children}</main>
          </div>
        </div>
        <footer className='bg-slate-200 mt-3'>
          <div className='max-w-4xl m-auto flex justify-center h-16 items-center'>
            <small>Copyright © 2023 • Jornada de programação de Rian Junplid</small>
          </div>
        </footer>
      </body>
    </html>
  )
}
