import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'

const RegisterForm = () => {
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="button">
                Register
            </Button>
            <p>Already having an account?</p>
            <p>Then go <a href='/login'>login</a> ;)</p>
        </Form>
    </Container>
  )
}

export default RegisterForm