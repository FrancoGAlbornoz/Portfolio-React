import React from 'react'
import reactLogo from '../assets/react.svg' // Asegurate de que esté en /assets
import '../styles/home.css'

const Main = () => {
  return (
    <div className="main-home">
      <div className="home-content">
        <div className="home-texto">
          <h1>¡Hola! 👋</h1>
          <p>Soy Franco Albornoz, desarrollador web frontend con enfoque en React. Me apasiona construir interfaces intuitivas, modernas y responsivas.</p>
          <p>Explorá más sobre mí en la sección About Me. 👨‍💻</p>
        </div>
        <div className="home-logo">
          <img src={reactLogo} alt="React Logo" className="react-logo" />
        </div>
      </div>
        
    </div>
  )
}

export default Main