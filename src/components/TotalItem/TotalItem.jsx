import './TotalItem.css'

const TotalItem = ({title, amount, type=""}) => {
  return (
    <div className={`totalItem ${type}`}>
        <p className='totalItemTitle'>{title}</p>
        <p className='totalItemAmount'>${amount.toFixed(2)}</p>
    </div>
  )
}

export default TotalItem