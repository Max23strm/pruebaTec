import CartLogo from '../../assets/images/cart-shopping-fast.png'
import {ButtonComponent} from '../index'

import './CartHeader.css'

const CartHeader = () => {
  return (
    <section className='cartHeader'>
        <div className='headerTitle'>
            <img src={CartLogo} alt="cart logo" />
            <p>Order summary</p>
        </div>


        <ButtonComponent content={"Remove all"}/>
    </section>
  )
}

export default CartHeader