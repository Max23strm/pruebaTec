import {ButtonComponent, ItemCounter} from '../index'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartSlice'
import imageItem from '../../assets/images/Item.png'
import trashcan from '../../assets/images/trash-can.png'

import './CartItem.css'

const CartItem = ({data}) => {

  const dispatch= useDispatch()
  const handleClick = ()=>{
    dispatch(removeItem({name: data.item_name, desc: data.short_description}))
  }

  return (
    <div className='cartItem'>
        <img src={imageItem} alt={'item '}/>
        <div className='itemText'>
            <h6>{data.item_name}</h6>
            <p>{data.short_description}</p>
        </div>
        <ItemCounter qty={data.quantity} itemData={{name: data.item_name, desc: data.short_description}}/>
        <div className='itemPrice'>
            <p>${Number(data.price_without_tax).toFixed(2)}</p>
        </div>
        <ButtonComponent content={<img src={trashcan} alt={"remove element"} />} event={handleClick} />
    </div>
  )
}

export default CartItem