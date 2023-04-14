import React from 'react'
import NavBar from '../components/navbar/NavBar'
import OrderOverlay from '../components/order/OrderOverlay'
import { PageProps } from '../model/props/PageProps'

const OrdersPage: React.FC<PageProps> = ({auth}) => {
  console.log('render Orders, auth:', auth)
  return (
    <div>
        <NavBar auth={auth}></NavBar>
        <OrderOverlay />
        <OrderOverlay />
        <OrderOverlay />
    </div>
  )
}

export default OrdersPage