import { CartItem } from '../index'
import  './CartItemsContainer.css'

const CartItemsContainer = () => {
  return (
    <div className='ItemsContainer'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>
  )
}

export default CartItemsContainer