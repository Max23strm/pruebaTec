import { useDispatch } from 'react-redux'
import { addItem, minusItem } from '../../redux/cartSlice'
import ButtonComponent from '../buttonComponent/buttonComponent'

import './ItemCounter.css'

const ItemCounter = ({qty, itemData}) => {
  const dispatch= useDispatch()
  const handleClick = (e) => {
    if(e.target.innerHTML=== "+"){
      dispatch(addItem(itemData))
    } else if (e.target.innerHTML=== "-"){
      dispatch(minusItem(itemData))
    }
  }

  return (
    <div className='itemCounter'>
      <ButtonComponent content={"-"} event={handleClick}/>
      <p>{qty}</p>
      <ButtonComponent content={"+"} event={handleClick}/>
    </div>
  )
}

export default ItemCounter