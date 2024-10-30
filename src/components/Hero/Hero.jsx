 import { useContext } from 'react'
import Button from '../Button/Button'
import './Hero.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'

export default function Hero() {
  const appContext = useContext(AppContext)
  return (
    <div className="hero d-flex al-center">
      <div className="hero-text">
        <h1>{appContext.languages[appContext.language].hero.title}</h1>
        <p>{appContext.languages[appContext.language].hero.subtitle}</p>
        <Link to={'/about'}>
          <Button buttonStyle='secondary' arrow>{appContext.languages[appContext.language].hero.cta}</Button>
        </Link>
      </div>
    </div>
  )
}