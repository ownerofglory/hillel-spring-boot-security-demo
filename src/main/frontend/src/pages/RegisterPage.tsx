import React from 'react'
import NavBar from '../components/navbar/NavBar'
import RegisterForm from '../components/register/RegisterForm'
import { Container, Row, Col } from 'react-bootstrap'

const RegisterPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Container style={{marginTop: '20px'}}>
            <Row>
                <Col lg={4} md={4}></Col>
                <Col lg={4} md={4}>
                    <RegisterForm></RegisterForm>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default RegisterPage