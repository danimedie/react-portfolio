import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'

const NavItem = ({ link, children }) => {
  return (
    <li>
      <a
        href={link}
        className='hover:bg-purple-400/40 rounded-full transition-all duration-300 md:p-3 block'
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
    <header id='header' className='text-lg relative'>
      <nav className='p-5 flex justify-between items-center'>

        <a href='/' className='font-bold text-2xl tracking-tighter'>
          medié
        </a>

        <button
          className='font-bold md:hidden z-50'
          onClick={handleClick}
          aria-label='Abrir menú de navegación'
          aria-expanded={showMenu}
        >
          <FaHamburger className='w-6 h-6' />
        </button>

        <ul className={`
          ${showMenu ? 'flex' : 'hidden'} 
          flex-col absolute text-right top-full right-0 z-50
          md:flex md:flex-row md:static md:gap-5
        `}
        >
          <NavItem link='#about'>About</NavItem>
          <NavItem link='#experience'>Experience</NavItem>
          <NavItem link='#projects'>Projects</NavItem>
          <NavItem link='#contact'>Contact</NavItem>
        </ul>

      </nav>
    </header>
  )
}
