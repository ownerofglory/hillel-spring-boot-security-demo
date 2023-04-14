import React from 'react'
import NavBar from '../components/navbar/NavBar'
import RegisterForm from '../components/register/RegisterForm'
import { Container, Row, Col } from 'react-bootstrap'
import { PageProps } from '../model/props/PageProps'
import { AuthProps } from '../model/props/AuthProps'
import { AuthModel } from '../model/AuthModel'

const RegisterPage: React.FC<AuthProps> = ({onLogin, onRegister, onLogout}) => {
  return (
    <div>
        <NavBar></NavBar>
        <Container style={{marginTop: '20px'}}>
            <Row>
                <Col lg={4} md={4}></Col>
                <Col lg={4} md={4}>
                    <RegisterForm onRegister={(auth: AuthModel) => onRegister(auth)}></RegisterForm>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default RegisterPage