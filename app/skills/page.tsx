export const metadata = {
  title: "Habilidades - Junplid",
  description: "Meu background de habilidades",
};

export default function About() {
  return (
    <main className='max-w-xl m-auto'>
      <h1 className='text-4xl font-medium mb-6'>Habilidades</h1>
      <table className={`mb-5 text-base font-normal`}>
        <thead>
          <tr className='border-b border-neutral-500'>
            <th className='pr-2 pb-2'>
              <span>Linguagens de programação</span>
            </th>
            <th className='pl-2 pb-2'>Plataform/Frameworks/Libraries</th>
          </tr>
        </thead>

        <tbody>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'>Javascript ⭐</td>
            <td className='pl-2 py-2'>Node.js ⭐, Express ⭐, JWT</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'>Typescript ⭐</td>
            <td className='pl-2 py-2'>React.js ⭐</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'>CSS:3 ⭐</td>
            <td className='pl-2 py-2'>Laravel</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'>PHP</td>
            <td className='pl-2 py-2'>Mongodb ⭐</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>MySQL, Sequelize, PostgreSQL</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>Prisma</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>Docker⭐, Linux</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>GCloud</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>Git ⭐, Github, Gitlab</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>Tailwind CSS ⭐, Scss ⭐</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>Figma</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>TDD ⭐</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>SOLID, MVC</td>
          </tr>
          <tr className='border-b last:border-none text-neutral-500 border-neutral-300'>
            <td className='pr-2 py-2'></td>
            <td className='pl-2 py-2'>Clean Architecture ⭐</td>
          </tr>
        </tbody>
      </table>
      <table className={`text-base font-normal`}>
        <thead>
          <tr className='border-b border-neutral-500'>
            <th className='pr-2 pb-2 text-start'>
              <span>Interpessoais</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Gerenciamento de tempo</td>
          </tr>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Adaptabilidade</td>
          </tr>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Solução de problemas</td>
          </tr>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Trabalho em equipe</td>
          </tr>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Criatividade</td>
          </tr>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Atenção aos detalhes</td>
          </tr>
          <tr className='border-b text-neutral-500 last:border-none border-neutral-300'>
            <td className='pr-2 py-2'>Orientado a objetivos</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
