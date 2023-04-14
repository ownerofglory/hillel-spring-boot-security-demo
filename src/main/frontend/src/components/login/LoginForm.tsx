import React, { ChangeEvent, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LoginModel } from '../../model/LoginModel'
import { useNavigate } from 'react-router-dom'
import { AuthModel } from '../../model/AuthModel'
import authService from '../../service/authService'

interface LoginFormProps {
    onLogin: (auth: AuthModel) => void
}

const LoginForm: React.FC<LoginFormProps> = ({onLogin}) => {
    const [loginData, setLoginData] = useState<LoginModel>()
   const navigate = useNavigate()

    const login = () => {
        authService.login(loginData!).then(data => {
            const auth = data as AuthModel
            onLogin(auth)
            localStorage.setItem('token', auth.token)
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