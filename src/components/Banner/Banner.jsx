/* eslint-disable react/prop-types */
import './Banner.css'

export default function Banner(props) {
  return (
    <div className='banner d-flex al-end' style={{ backgroundImage: `url(/${props.image})`}}>
      <div className="container">
        <div className="title-painel d-flex al-center jc-center">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}