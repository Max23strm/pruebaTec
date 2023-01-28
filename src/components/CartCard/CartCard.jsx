import { useSelector } from 'react-redux'
import {CartHeader, CartItemsContainer, CartTotals} from '../index'

import './CartCard.css'


const CartCard = () => {
  const { cart }=useSelector(state=> state.cartSlice)
  return (
    <div className="CartContainer">
      <section className='cartContent'>
        <CartHeader/>
        <CartItemsContainer items={cart}/>
        <CartTotals/>
      </section>
    </div>
  )
}

export default CartCard