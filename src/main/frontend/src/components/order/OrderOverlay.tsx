import React from 'react'
import { Container, Table } from 'react-bootstrap'

const OrderOverlay = () => {
  return (
    <Container style={{
            border: '1px solid lightgray', 
            borderRadius: '4px', 
            marginTop: '20px',
            marginBottom: '20px'
        }}>
        <p>Order date: 2020-01-01 12:00:00</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>iPhone9</td>
                    <td><img height={'48px'} src={'https://i.dummyjson.com/data/products/1/4.jpg'}/></td>
                    <td>1</td>
                    <td>150$</td>
                </tr>
            </tbody>
        </Table>
        <p>total amount: 400$</p>
    </Container>
  )
}

export default OrderOverlay