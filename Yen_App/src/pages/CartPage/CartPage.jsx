import React from 'react'
import OrderProductCard from '../../components/OrderProductCard/OrderProductCard'

const CartPage = () => {
  return (
    <div>
      <div style={{textAlign:'center', fontSize: 32, fontWeight: '600', paddingTop: '38px'}}>My Shopping Cart</div>
      <div>
        <div>
          <OrderProductCard/>
        </div>
      </div>
    </div>
  )
}

export default CartPage