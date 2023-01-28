import './buttonComponent.css'


const ButtonComponent = ({content, event}) => {
  return (
    <button onClick={(e)=>event(e)}>{content}</button>
  )
}

export default ButtonComponent