import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const MainContact = () => {
  const form = useRef()
  
  const sendEmail = (e)=>{
    e.preventDefault()
    
    emailjs.sendForm(
      "service_wrtn0sh",
      "template_y7hdkgs",
      form.current,
      "1K4nhqFHX2VY7khMi"

    ).then(
      (result) =>{
        console.log(result);
        alert("Mensaje enviado correctamente ✔")
        form.current.reset();
      })
      .catch(()=>{
        alert("Error al enviar el mensaje❌")

      })
  }




  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Dejame tus datos y te responderé pronto.</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Tu nombre" required  name="name"/>
        <input type="email" placeholder="Tu email" required  name="email"/>
        <textarea placeholder="Tu mensaje" required name="message"></textarea>
        <Button type="submit" variant="success">Enviar</Button>
      </form>
    </div>
  )
}

export default MainContact