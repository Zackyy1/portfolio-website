import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
  return (
    <header>
      <Link to={'/'}>Home</Link>
      <Link to={'/portfolio'}>Portfolio</Link>
      <Link to={'/contact'}>Contact</Link>
    </header>
  )
}

export default Header