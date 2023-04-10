import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const CartOverlay = () => {
  return (
    <Container style={{marginTop: '20px'}}>
         <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>iPhone9</td>
                    <td><img height={'48px'} src={'https://i.dummyjson.com/data/products/1/4.jpg'}/></td>
                    <td>1</td>
                    <td>150$</td>
                    <td>
                        <Button variant="danger">Remove</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        <p>Total amount: 340$</p>
        <Button variant="primary">Complete order</Button>
    </Container>
  )
}

export default CartOverlay