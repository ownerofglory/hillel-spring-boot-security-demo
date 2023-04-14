import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Container } from 'react-bootstrap'
import { PageProps } from '../model/props/PageProps'

const ErrorPage: React.FC<PageProps> = ({auth}) => {
  return (
    <div>
        <div>
            <NavBar auth={auth}></NavBar>
            <Container style={{marginTop: '20px'}}>
                <h1>{'Sorry, something went wrong :('}</h1>
                <h3>You can try it another time</h3>
            </Container>
        </div>
    </div>
  )
}

export default ErrorPage