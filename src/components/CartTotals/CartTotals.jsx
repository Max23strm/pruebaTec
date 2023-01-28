import { useSelector } from 'react-redux'
import {TotalItem} from '../index'

import "./CartTotals.css"

const CartTotals = () => {
  const { subTotal, shippingFees, taxes }=useSelector(state=> state.cartSlice)
  

  return (
    <div className="cartTotalSection">
        <hr/>

        <div className='titlesContainer'>
            <TotalItem title={"Subtotal"} amount={Number(subTotal)}/>
            <TotalItem title={"Shipping fees"} amount={Number(shippingFees)}/>
            <TotalItem title={"Taxes"} amount={Number(taxes)}/>
            <TotalItem title={"Total (including tax)"} amount={Number(taxes + subTotal + shippingFees)} type={"total"}/>
        </div>
    </div>
  )
}

export default CartTotals