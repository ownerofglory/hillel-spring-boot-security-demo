import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Cart } from '../../model/Cart'
import { totalmem } from 'os'

interface CartOverlayProps {
    cart: Cart
}

const CartOverlay: React.FC<CartOverlayProps> = ({cart}) => {
    const [total, setTotal] = useState(0)

    const calculateTotal = () => {
        return cart?.cartItems?.reduce((acc: number, cur) => acc + cur.product.price, 0)
    }

    useEffect(() => {
        
        setTotal(calculateTotal())
    
      return () => {
        
      }
    }, [cart])
    
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
                {
                    cart.cartItems?.map((item, idx) => (
                        <tr>
                            <td>{idx}</td>
                            <td>{item.product.title}</td>
                            <td><img height={'48px'} src={item.product.imageUrl}/></td>
                            <td>{item.quantity}</td>
                            <td>{item.product.price} $</td>
                            <td>
                                <Button variant="danger">Remove</Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        <p>Total amount: {total} $</p>
        <Button variant="primary">Complete order</Button>
    </Container>
  )
}

export default CartOverlay