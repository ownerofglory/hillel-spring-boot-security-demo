import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Container } from 'react-bootstrap'

const ErrorPage = () => {
  return (
    <div>
        <div>
            <NavBar></NavBar>
            <Container style={{marginTop: '20px'}}>
                <h1>{'Sorry, something went wrong :('}</h1>
                <h3>You can try it another time</h3>

            </Container>
        </div>
    </div>
  )
}

export default ErrorPage