
import ButtonComponent from '../buttonComponent/buttonComponent'
import './ItemCounter.css'

const ItemCounter = () => {
  return (
    <div className='itemCounter'>
      <ButtonComponent content={"-"}/>
      <p>0</p>
      <ButtonComponent content={"+"}/>
    </div>
  )
}

export default ItemCounter