import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { AuthModel } from '../../model/AuthModel'
import shoppingCartService from '../../service/shoppingCartService'

interface NavBarProps {
    auth?: AuthModel
}

const NavBar: React.FC<NavBarProps> = ({auth}) => {
    const [cartSize, setCartSize] = useState(0)


    const getCartSize = () => {
        if (auth) {
            shoppingCartService.getCartSize(auth.userId, auth.token).then(data => setCartSize(data.size))
        }  
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
                        auth ? (
                            <Nav.Link href='/orders'>Orders</Nav.Link>
                        ): (<span></span>)
                    }
                    
                </Nav>
                { auth ? (
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
                            Signed in as: <a href='#'>{auth.name}</a>
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