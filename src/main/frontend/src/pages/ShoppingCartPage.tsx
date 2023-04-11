import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import CartOverlay from '../components/cart/CartOverlay'
import { Cart } from '../model/Cart'

const ShoppingCartPage = () => {
    const [cart, setCart] = useState<Cart>()

    const jwt = localStorage.getItem('token')

    const getCart = () => {
        fetch('http://localhost:8080/api/cart', {
            method: 'GET',
            headers: {
                'userId': '1',
                'Authorization': `Bearer ${jwt}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
            }
        }).then(data => setCart(data))
    }

    useEffect(() => {
      getCart()
    
      return () => {
        
      }
    }, [])
    

    

  return (
    <div>
        <NavBar></NavBar>
        <CartOverlay cart={cart ?? {} as Cart}></CartOverlay>
    </div>
  )
}

export default ShoppingCartPage