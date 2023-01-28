import './TotalItem.css'

const TotalItem = ({title, amount}) => {
  return (
    <div className='totalItem'>
        <p className='totalItemTitle'>{title}</p>
        <p className='totalItemAmount'>${amount}</p>
    </div>
  )
}

export default TotalItem