import Link from 'next/link';

export default function Home() {
  return (
    <main className="absolute h-[calc(140vh)] py-60 bg-green px-0 px-6 -z-10 sm:h-[calc(100vh)] md:px-24">
      <div className="relative bg-pink top-1/2 -translate-y-1/2 my-16 sm:mt-40 lg:mt-32 sm:top-auto sm:translate-y-none">
        <div className="bg-red h-[calc(100vh)] w-full flex flex-col items-center justify-center text-center sm:w-2/3 sm:h-auto sm:text-left sm:block">
          <h1 className="text-secundary uppercase text-6xl font-bold ">Duelan's Portifolio</h1>
          <h3 className="text-gray text-lg font-light">Scripter/Programmer, Builder, Game Developer</h3>

          <p className="text-secundary w-10/12 text-base my-4">
            Hello! My name is Alysson, I’m 20 years old, and I’m a game developer also known as Duelan. I’m passionate about creating games on the Roblox platform. Here, you can learn more about me, explore my journey as a game developer, discover my main projects, and get in touch with me. Feel free to explore; it’s an honor to have you here!
          </p>

          <Link href="/" className='font-bold underline text-blue-link'>Read More -{'>'}</Link>
        </div>

        <div className='h-[calc(40vh)] flex flex-col items-center justify-center space-y-6 space-x-0 mt-0 sm:mt-12 sm:flex-row sm:space-x-10 sm:space-y-0'>
          <div className='bg-primary w-fit flex flex-col items-center'>
            <h1 className='text-primary-blue text-8xl font-black'>6</h1>
            <h3 className='w-24 text-center text-base font-semibold'>Years Of Experience</h3>
          </div>

          <div className='bg-primary w-fit flex flex-col items-center'>
            <h1 className='text-primary-blue text-8xl font-black'>+650M</h1>
            <h3 className='w-24 text-center text-base font-semibold'>Game Visits</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
