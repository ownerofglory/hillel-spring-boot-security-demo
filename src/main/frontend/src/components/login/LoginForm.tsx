import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const LoginForm = () => {
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="button">
                Submit
            </Button>
            <p>Don't have an account?</p>
            <p>You can <a href='/register'>register here</a> ;)</p>
        </Form>
    </Container>
  )
}

export default LoginForm