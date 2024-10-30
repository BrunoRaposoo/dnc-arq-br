import './Button.css'

// ASSETS
import Arrow from '../../assets/arrow.svg'

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Button({ arrow, buttonStyle, loading, children, ...props}) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children} {arrow && <img src={Arrow} />}
    </button>
  )
}