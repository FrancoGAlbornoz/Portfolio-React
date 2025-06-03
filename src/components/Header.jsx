import React from 'react'
import {Nav, Button} from 'react-bootstrap'
import useTheme from '../store/useTheme'
import '../styles/header.css'

const Header = () => {

  const { darkMode, toggleTheme } = useTheme()


  return (
    <div>
      
      
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link  href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/aboutme">Sobre mi</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contacto</Nav.Link>
      </Nav.Item>
      <div className='header-bar'>
        <Button variant="dark" onClick={toggleTheme}>{darkMode ? '🌒' : '🌖'}</Button>
      </div>
    </Nav>
    </div>
  )
}

export default Header