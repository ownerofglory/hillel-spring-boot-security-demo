import React from 'react'
import NavBar from '../components/navbar/NavBar'
import OrderOverlay from '../components/order/OrderOverlay'

const OrdersPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <OrderOverlay />
        <OrderOverlay />
        <OrderOverlay />
    </div>
  )
}

export default OrdersPage