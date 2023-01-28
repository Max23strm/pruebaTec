import {CartHeader, CartItemsContainer, CartTotals} from '../index'

import './CartCard.css'


const CartCard = () => {
  return (
    <div className="CartContainer">
      <section className='cartContent'>
        <CartHeader/>
        <CartItemsContainer/>
        <CartTotals/>
      </section>
    </div>
  )
}

export default CartCard