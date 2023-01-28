import { CartItem } from '../index'
import  './CartItemsContainer.css'

const CartItemsContainer = ({items}) => {
  return (
    <div className='ItemsContainer'>
      {items[0] ?
       items.map((e,i)=><CartItem data={e} key={i}/>)
       :
       <p className='emptyCart'>No items in cart</p>
      }
    </div>
  )
}

export default CartItemsContainer