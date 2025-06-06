import React, {useState, useEffect} from 'react'
import {Nav, Button} from 'react-bootstrap'
import useTheme from '../store/useTheme'
import datos from '../data/perfil'
import '../styles/header.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {

  const [info, setInfo] = useState(null)
  console.log(info);
  
  useEffect(() => {
    setInfo(datos)
  }, []) 

  const { darkMode, toggleTheme } = useTheme()


  return (
    <div>
      
       <div className="header-top">
        <h1 className="text-white m-0">Portfolio {info?.nombre} {info?.apellido}</h1>
        <div className="header-icons">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer"><FaGithub size={24} color="white" /></a>
          <a href="https://www.linkedin.com/in/francogenaroalbornoz" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} color="white" /></a>
        </div>
      </div>


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