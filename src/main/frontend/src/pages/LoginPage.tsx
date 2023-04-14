import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Col, Container, Row } from 'react-bootstrap'
import LoginForm from '../components/login/LoginForm'
import { PageProps } from '../model/props/PageProps'
import { AuthModel } from '../model/AuthModel'
import { AuthProps } from '../model/props/AuthProps'

const LoginPage: React.FC<AuthProps> = ({onLogin, onRegister, onLogout}) => {
  return (
    <div>
        <NavBar></NavBar>
        <Container style={{marginTop: '20px'}}>
            <Row>
                <Col lg={4} md={4}></Col>
                <Col lg={4} md={4}>
                    <LoginForm onLogin={(auth: AuthModel) => onLogin(auth)}></LoginForm>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LoginPage