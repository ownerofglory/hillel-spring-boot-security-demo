import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    const isSigned = true

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
            <Navbar.Brand href='#home'>Hillel Spring-Boot</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Main</Nav.Link>
                    {
                        isSigned ? (
                            <Nav.Link href='/orders'>Orders</Nav.Link>
                        ): (<span></span>)
                    }
                    
                </Nav>
                { isSigned ? (
                    <Nav>
                        <Nav.Link href='/cart'>
                            <FontAwesomeIcon icon={ faCartShopping } style={{marginRight: 10}} />
                            <Badge bg='primary'>9</Badge>
                        </Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href='#'>Test User</a>
                        </Navbar.Text>
                        <Nav.Link href='/logout'>Logout</Nav.Link>
                    </Nav>
                ): (
                    <Nav>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                ) }
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar