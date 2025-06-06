import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
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

    <Container className="mt-5">
      <Row className="justify-content-center align-items-stretch g-4">
        
        <Col md={10} lg={6}>
          <Card className="p-4 shadow-lg h-100" style={{ minHeight: '550px', fontSize: '1.1rem' }}>
            <Card.Body className="text-center">
              <Card.Img variant="top" src={info.imagen} alt="Foto" className="rounded-circle mb-3" style={{ width: '180px', height: '180px', objectFit: 'cover' }}/>
              <Card.Title as="h2" className="mb-3">{info.nombre} {info.apellido}</Card.Title>
              <Card.Text className="mb-4">{info.descripcion}</Card.Text>
              <h4>Hobbies</h4>
              <div className="mb-3">
                {info.hobbies.map((hobbie, i) => (
                  <Badge key={i} bg="secondary" className="me-2 mb-1 px-3 py-2 fs-6 badge-hover">{hobbie}</Badge>
                ))}
              </div>
              <h4>Skills</h4>
              <div>
                {info.skills.map((skill, i) => (
                  <Badge key={i} bg="primary" className="me-2 mb-1 px-3 py-2 fs-6 badge-hover">{skill}</Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} lg={6}>
          <Card className="p-3 shadow-lg h-100" style={{ minHeight: '550px', fontSize: '0.91rem' }}>
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4">Experiencias</Card.Title>
              <Card.Title as="h3" className="text-center mb-4">Ministerio de Educacion Tucuman-FullStack</Card.Title>
              <ul className="px-3">
                <li className="mb-2">Diseño, desarrollo y mantenimiento a aplicaciones front-end y back-end</li>
                <li className="mb-2">Configuración de conexiones a bases de datos, escribiendo código en lenguajes como JavaScript, C#, .Net</li>
                <li className="mb-2">Trabajo con bases de datos para almacenar y gestionar la información (Diseño,consultas SQL, etc.).</li>
                <li className="mb-2">Git y GitHub, manejo de ramas y versiones</li>
              </ul>
              <br />
              <Card.Title as="h3" className="text-center mb-4">Citricola San Miguel-Soporte IT</Card.Title>
              <ul className="px-3">
                <li className="mb-2">Identificación y análisis de problemas técnicos reportados por los usuarios, en entornos operativos Windows, macOS y Linux.</li>
                <li className="mb-2">Gestión y asignación de hardware informático, con mantenimiento proactivo de PCs, dispositivos móviles y periféricos.</li>
                <li className="mb-2">Seguimiento para asegurar que los problemas se resuelvan completamente.</li>
                <li className="mb-2">Configuración y mantenimiento de redes, asegurando una infraestructura de TI robusta y segura.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <br />
    </div>
  )
}

export default MainAboutMe