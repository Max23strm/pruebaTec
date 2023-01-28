import { useDispatch } from 'react-redux'
import CartLogo from '../../assets/images/cart-shopping-fast.png'
import {ButtonComponent} from '../index'
import { removeAll } from '../../redux/cartSlice'

import './CartHeader.css'

const CartHeader = () => {

  const dispatch =useDispatch()

  const handleRemove = () => {
    dispatch(removeAll())
  }

  return (
    <section className='cartHeader'>
        <div className='headerTitle'>
            <img src={CartLogo} alt="cart logo" />
            <p>Order summary</p>
        </div>


        <ButtonComponent content={"Remove all"} event={handleRemove}/>
    </section>
  )
}

export default CartHeader