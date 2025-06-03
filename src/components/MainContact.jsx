import React from 'react'

const MainContact = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Dejame tus datos y te responderé pronto.</p>
      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu email" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default MainContact