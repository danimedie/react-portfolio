import { Link } from 'react-router-dom'
import mediemoji from '../../assets/mediemoji.png'
import { FiGithub } from 'react-icons/fi'

const NavItem = ({ link, children }) => {
  const isExternal = link.startsWith('http')
  const sharedStyles = 'hover:bg-purple-400/40 rounded-full transition-all duration-400'

  return (
    <li>
      {isExternal
        ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={`${sharedStyles}`}
          >
            {children}
          </a>
          )
        : (
          <Link
            to={link}
            className={`${sharedStyles} `}
          >
            {children}
          </Link>
          )}
    </li>
  )
}

export function Header () {
  return (
    <header>
      <nav className='p-2'>
        <ul className='flex justify-center items-center gap-5'>
          <NavItem link='/'>
            <img
              src={mediemoji}
              alt='Emoji de Dani Medié sonriendo'
              className='w-10 h-10 object-contain'
            />
          </NavItem>

          <NavItem link='/experience'>
            Experience
          </NavItem>

          <NavItem link='/projects'>
            Projects
          </NavItem>

          <NavItem link='/About'>
            About
          </NavItem>

          <NavItem link='https://github.com/danimedie'>
            <FiGithub className='w-6 h-6' />
          </NavItem>
        </ul>
      </nav>
    </header>
  )
}
