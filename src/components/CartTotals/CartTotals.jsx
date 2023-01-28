import {TotalItem} from '../index'

import "./CartTotals.css"

const CartTotals = () => {
  return (
    <div className="cartTotalSection">
        <hr/>

        <div className='titlesContainer'>
            <TotalItem title={"Subtotal"} amount={134.21}/>
            <TotalItem title={"Shipping fees"} amount={3.23}/>
            <TotalItem title={"Taxes"} amount={5.51}/>
            <TotalItem title={"Total (including tax)"} amount={142.95}/>
        </div>
    </div>
  )
}

export default CartTotals