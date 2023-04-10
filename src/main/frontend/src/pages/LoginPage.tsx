import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Col, Container, Row } from 'react-bootstrap'
import LoginForm from '../components/login/LoginForm'

const LoginPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Container style={{marginTop: '20px'}}>
            <Row>
                <Col lg={4} md={4}></Col>
                <Col lg={4} md={4}>
                    <LoginForm></LoginForm>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LoginPage