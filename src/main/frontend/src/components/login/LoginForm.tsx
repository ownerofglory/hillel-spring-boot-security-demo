import React, { ChangeEvent, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LoginModel } from '../../model/LoginModel'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [loginData, setLoginData] = useState<LoginModel>()
   const navigate = useNavigate()

    const login = () => {
        fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }).then(resp => {
            if (!resp.ok) {
                navigate('/error')
                return
            }
            return resp.json()
        }).then(data => {
            localStorage.setItem('token', data.token)
            navigate('/')
        })
    }

  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e: ChangeEvent) => {
                    const input = e.target as HTMLInputElement
                    const login = {
                        email: input.value ?? '',
                        password: loginData?.password ?? ''
                    }
                    setLoginData(login)
                }}  />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e: ChangeEvent) => {
                    const input = e.target as HTMLInputElement
                    const login = {
                        password: input.value ?? '',
                        email: loginData?.email ?? ''
                    }
                    setLoginData(login)
                }} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={() => login()}>
                Submit
            </Button>
            <p>Don't have an account?</p>
            <p>You can <a href='/register'>register here</a> ;)</p>
        </Form>
    </Container>
  )
}

export default LoginForm