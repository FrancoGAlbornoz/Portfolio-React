import React from 'react'
import "../styles/footer.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <p className='pfooter'>Gracias por visitar mi PortFolio ✨</p>
      <p>
        <a href="https://github.com/FrancoGAlbornoz" target="_blank"><FaGithub size={24} />GitHub</a> | 
        <a href="https://www.linkedin.com/in/francogenaroalbornoz" target="_blank"><FaLinkedin size={24} />LinkedIn</a>
      </p>
    </div>
  )
}

export default Footer