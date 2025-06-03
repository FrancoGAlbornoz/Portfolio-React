import React from 'react'
import { useEffect, useState } from 'react'
import datos from '../data/perfil'


const MainAboutMe = () => {
    const [info, setInfo] = useState(null)
    console.log(info);

    useEffect(() => {
        setInfo(datos)
    }, []) 
  
  if (!info) return <div>Cargando...</div>
  return (
    <div>
        <br />
      <div className="card">
      <img src={info.imagen} alt="Foto" />
      <h2>{info.nombre} {info.apellido}</h2>
      <p>{info.descripcion}</p>
      <h3>Hobbies</h3>
      <ul className="lista-horizontal">
        {info.hobbies.map((hobbie, i) => <li key={i}>{hobbie}</li>)}
      </ul>
      <h3>Skills</h3>
      <ul className="lista-horizontal">
        {info.skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
    </div>
  )
}

export default MainAboutMe