import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Container style={{marginTop: '20px'}}>
            <h1>{'Sorry, we\'re not able to find \nthe page you\'ve requested :('}</h1>
            <h3>You can try choosing one of the following pages </h3>
            <p><a href='/'>Main Page</a></p>
            <p><a href='/login'>Login</a></p>
        </Container>
    </div>
  )
}

export default NotFoundPage