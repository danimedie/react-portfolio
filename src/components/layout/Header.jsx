import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'

const NavItem = ({ link, children }) => {
  return (
    <li>
      <a
        href={link}
        className='hover:bg-primary/40 rounded-full transition-all duration-300 md:p-3 block'
      >
        {children}
      </a>
    </li>
  )
}

export function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  return (
    <header id='header' className='text-lg fixed w-full p-6 bg-[#222] z-100'>
      <nav className='flex justify-between items-center'>

        <a href='/' className='font-bold text-2xl tracking-tighter'>
          medié
        </a>

        <button
          className='md:hidden z-50'
          onClick={handleClick}
          aria-label='Abrir menú de navegación'
          aria-expanded={showMenu}
        >
          <FaHamburger className={`${showMenu ? 'text-primary' : 'text-white'} w-6 h-6 transition-all duration-300`} />
        </button>

        <ul className={`
          ${showMenu ? 'flex' : 'hidden'} 
          flex-col absolute top-full right-0 w-full bg-[#222] p-5 gap-4 shadow-xl border-b border-primary z-50
          md:flex md:flex-row md:static md:bg-transparent md:w-auto md:p-0 md:border-none md:shadow-none
        `}
        >
          <NavItem link='#projects'>Projects</NavItem>
          <NavItem link='#about'>About</NavItem>
          <NavItem link='#experience'>Experience</NavItem>
          <NavItem link='#contact'>Contact</NavItem>
        </ul>

      </nav>
    </header>
  )
}
