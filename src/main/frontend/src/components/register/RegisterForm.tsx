import React, { ChangeEvent, useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { RegisterModel } from '../../model/RegisterModel'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState<RegisterModel>()
    const navigate = useNavigate()

    const register = () => {
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            body: JSON.stringify(registerData)
        }).then(resp => {
            if (resp.ok) {
                navigate('/login')
            } else {
                navigate('/error')
            }
        })
    }

  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onChange={(e: ChangeEvent) => {
                    const input = e.target as HTMLInputElement
                    const register = {
                        name: input.value ?? '',
                        password: registerData?.password ?? '',
                        email: registerData?.email ?? ''
                    }
                    setRegisterData(register)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e: ChangeEvent) => {
                    const input = e.target as HTMLInputElement
                    const register = {
                        email: input.value ?? '',
                        password: registerData?.password ?? '',
                        name: registerData?.name ?? ''
                    }
                    setRegisterData(register)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e: ChangeEvent) => {
                    const input = e.target as HTMLInputElement
                    const register = {
                        password: input.value ?? '',
                        email: registerData?.email ?? '',
                        name: registerData?.name ?? ''
                    }
                    setRegisterData(register)
                }}  />
            </Form.Group>
            <Button variant="primary" type="button" onClick={(e) => register()} >
                Register
            </Button>
            <p>Already having an account?</p>
            <p>Then go <a href='/login'>login</a> ;) </p>
        </Form>
    </Container>
  )
}

export default RegisterForm