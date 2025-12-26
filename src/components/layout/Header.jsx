import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'

const NavItem = ({ link, children }) => {
  return (
    <li>
      <a
        href={link}
        rel='noopener noreferrer'
        className='hover:bg-purple-400/40 rounded-full transition-all duration-400 p-3'
      >
        {children}
      </a>
    </li>
  )
}

export function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header id='header' className='text-lg'>
      <nav className='p-5'>
        <ul className='relative flex justify-between items-center gap-5'>
          <p className='font-bold'>medié</p>

          <button className='font-bold md:hidden' onClick={handleClick}>
            <FaHamburger className='w-5 h-5' />
          </button>

          <div
            className={`
              ${showMenu ? 'flex' : 'hidden'} 
              flex-col text-right absolute top-full right-0 z-50
              md:flex md:flex-row md:static md:gap-5
            `}
          >
            <NavItem link='#about'>
              About
            </NavItem>

            <NavItem link='#experience'>
              Experience
            </NavItem>

            <NavItem link='#projects'>
              Projects
            </NavItem>

            <NavItem link='#contact'>
              Contact
            </NavItem>
          </div>
        </ul>
      </nav>
    </header>
  )
}
