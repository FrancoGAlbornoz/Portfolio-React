import React from 'react'
import reactLogo from '../assets/react.svg'
import vet from '../assets/vet.png'
import c from '../assets/c.png'
import leng from '../assets/leng.png'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/home.css'

const Main = () => {
  return (
    <div>
      <Container className="py-5">
        <Card className="p-4 shadow-lg h-100" style={{ minHeight: '200px', fontSize: '1.1rem' }}>
          <Row className="align-items-center">  
            <Col md={8}>
              <h1>¡Hola! 👋</h1>
              <p>Bienvenido a mi portfolio personal. Soy desarrollador web especializado en tecnologías modernas como React, JavaScript, y más. Explorá mis proyectos y conocé más sobre mí en la sección "Sobre mí".</p>
            </Col>
            <Col md={4} className="text-center">
              <img src={reactLogo} className="react-logo" alt="React logo" style={{ width: '150px', height: '150px', transform:"scale(1.05)" }}/>
            </Col>
          </Row>
        </Card>
        <br />
        <hr />
        <h3>Mis proyectos</h3>
        <Row className="mt-4">
        <Col md={4} className="mt-3">
          <Card className="h-100 shadow-sm card-hover" style={{fontSize: '1.1rem' }}>
            <Card.Body>
              <Card.Img variant="top" src={vet} alt="Foto"/>
              <Card.Title>Veterinaria Patitas</Card.Title>
              <Card.Text>Proyecto de Veterinaria y tienda para mascotas.</Card.Text>
              <Card.Link href="https://github.com/FrancoGAlbornoz/Veterinaria" target="_blank" rel="noopener noreferrer">Ver en GitHub</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mt-3">
          <Card className="h-100 shadow-sm card-hover" style={{fontSize: '1.1rem' }}>
            <Card.Body>
              <Card.Img variant="top" src={leng} alt="Foto"/>
              <Card.Title>Proyecto Lenguajes de programacion.</Card.Title>
              <Card.Text>Proyecto de programacion, lenguajes mas usados en la programacion.</Card.Text>
              <Card.Link href="https://github.com/tuusuario/proyecto1" target="_blank" rel="noopener noreferrer">Ver en GitHub</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mt-3">
          <Card className="h-100 shadow-sm card-hover" style={{fontSize: '1.1rem' }}>
            <Card.Body>
              <Card.Img variant="top" src={c} alt="Foto"/>
              <Card.Title>Proyectos C</Card.Title>
              <Card.Text>Proyectos en C. Trabajos integrados en C. Metodos de ordenamiento.</Card.Text>
              <Card.Link href="https://github.com/tuusuario/proyecto1" target="_blank" rel="noopener noreferrer">Ver en GitHub</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
          <Col className="text-center">
            <p style={{ color: 'white', fontSize: '1.2rem' }}>
              📊 ¿Cómo puedo ayudarte a vos y a tu empresa? Mi experiencia me ha preparado no solo para el desarrollo de aplicaciones sino también para asegurar que cada pieza del engranaje tecnológico funcione sin contratiempos. 
              Esto último ha sido especialmente gracias a mi rol como soporte técnico, donde mi habilidad para diagnosticar y resolver problemas ha mantenido la operatividad de sistemas críticos, elevando la eficiencia operacional de las empresas donde trabajé.
            </p>
          </Col>
        </Row>
    </Container>



        
    </div>
  )
}

export default Main