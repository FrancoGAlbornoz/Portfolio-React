import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import mifoto from '../assets/mifoto.jpeg'

const Home = () => {

    const misDatos = {
        nombreApe: "Albornoz, Franco Genaro",
        descripcion: "🙌 ¡Hola! Soy Franco, un apasionado por la ingeniería en sistemas de la información, cuyo recorrido académico ha sido una inmersión total en el universo de la programación y el desarrollo de soluciones tecnológicas, con foco en soporte técnico.",
        imagen: mifoto,
        lenguajes: ["JS ⚛️", "Python 🐍", "HTML & CSS 🌐", "MySQL 📚"]
    }


  return (
    <div>
        <Header nombreApe={misDatos.nombreApe}/>
        <Main datos={misDatos}/>
        <Footer/>
    </div>
  )
}

export default Home