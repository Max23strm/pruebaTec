import {ButtonComponent, ItemCounter} from '../index'
import imageItem from '../../assets/images/Item.png'
import trashcan from '../../assets/images/trash-can.png'

import './CartItem.css'

const CartItem = () => {
  return (
    <div className='cartItem'>
        <img src={imageItem} alt={'item '}/>
        <div className='itemText'>
            <h6>Item name here</h6>
            <p>Sub information</p>
        </div>
        <ItemCounter/>
        <div className='itemPrice'>
            <p>$10.00</p>
        </div>
        <ButtonComponent content={<img src={trashcan} alt={"remove element"}/>} />
    </div>
  )
}

export default CartItem