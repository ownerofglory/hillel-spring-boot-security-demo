import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    const [cartSize, setCartSize] = useState(0)
    const jwt = localStorage.getItem('token')
    const isSigned = !!jwt

    const getCartSize = () => {
        fetch('http://localhost:8080/api/cart/size', {
            method: 'GET',
            headers: {
                'userId': '1',
                'Authorization': `Bearer ${jwt}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
            }
        }).then(data => setCartSize(data.size))
    }

    useEffect(() => {
        getCartSize()
    
      return () => {
        
      }
    }, [cartSize])
    

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
                            {
                                cartSize > 0 ? (
                                    <Badge bg='primary'>{cartSize}</Badge>
                                ): (
                                    <span></span>
                                )
                            } 
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