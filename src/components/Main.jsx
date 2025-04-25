import React from 'react'

const Main = ({datos}) => {
  return (
    <div>
      <br />
      <div className="card">
        <img src={datos.imagen} alt="Foto de perfil" />
        <h2>{datos.nombreApe}</h2>
        <p>{datos.descripcion}</p>
      </div>
      <h4>Lenguajes y habilidades</h4>
      <div className="lenguajes">
          {datos.lenguajes.map((lenguaje, index) => (
            <span key={index} className="lenguaje-contenedor"> {lenguaje} </span>
          ))}
        </div>
    </div>
  )
}

export default Main