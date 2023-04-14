import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import CartOverlay from '../components/cart/CartOverlay'
import { Cart } from '../model/Cart'
import { PageProps } from '../model/props/PageProps'
import shoppingCartService from '../service/shoppingCartService'

const ShoppingCartPage: React.FC<PageProps> = ({auth}) => {
    const [cart, setCart] = useState<Cart>()

    const getCart = (userId: number) => {
        if (!auth) {
            return
        }

        shoppingCartService.getCart(auth.userId, auth.token).then(data => setCart(data))
    }

    useEffect(() => {
      getCart(auth?.userId!)
    
      return () => {
        
      }
    }, [])
    

    

  return (
    <div>
        <NavBar auth={auth}></NavBar>
        <CartOverlay cart={cart ?? {} as Cart}></CartOverlay>
    </div>
  )
}

export default ShoppingCartPage