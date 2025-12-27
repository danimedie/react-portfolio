import mediemoji from '../assets/mediemoji.png'

const ProjectCard = () => {
  return (
    <li>
      <article>
        <a className='block hover:scale-105 transition duration-300' href=''>
          <h3 className='sr-only'>Nombre</h3>
          <img className='w-100 h-70 object-contain rounded-3xl bg-primary shadow-md' src='' alt='' />
        </a>
      </article>
    </li>
  )
}

export default function Home () {
  return (
    <>
      <section className='min-h-screen justify-items-center space-y-10 md:flex md:justify-between md:items-center md:px-40 md:space-y-0'>
        <div className='space-y-3 font-bold'>
          <span className='text-5xl block'>Hello 👋</span>
          <h1 className='text-5xl'>I'm <span className='text-primary'>Dani Medié</span></h1>
          <p className='w-fit px-8 py-3 rounded-xl bg-linear-to-b from-neutral-900 to-neutral-950 shadow-2xl'>Front-End Developer</p>
        </div>

        <div>
          <img className='w-100 h-100 object-contain' src={mediemoji} alt='Emoji of Dani Medié' />
        </div>
      </section>

      <section id='projects' className='text-center space-y-5 py-20'>
        <h2 className='font-bold text-4xl'>PROJECTS</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ul>
      </section>

      <section id='about' className='text-center space-y-5 py-20'>
        <h2 className='font-bold text-4xl'>ABOUT ME</h2>
      </section>

      <section id='experience' className='text-center space-y-5 py-20'>
        <h2 className='font-bold text-4xl'>EXPERIENCE</h2>
      </section>

      <section id='contact' className='text-center space-y-5 py-20'>
        <h2 className='font-bold text-4xl'>CONTACT</h2>
      </section>
    </>
  )
}
