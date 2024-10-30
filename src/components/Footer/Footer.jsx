import { Link } from "react-router-dom"
import Button from "../Button/Button"

// CSS
import './Footer.css'

// ASSETS
import LogoDnc from '../../assets/dnc-logo.svg'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import Brasil from '../../assets/brasil.svg'
import USA from '../../assets/usa.svg'

//CONTEXT
import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"


export default function Footer() {
  const appContext = useContext(AppContext)
  const changeLanguage = (country) => {
    appContext.setLanguage(country)
  }

  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={LogoDnc} className="footer-logo" />
            <p className="grey-1-color">
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="https://google.com" target="_blank">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={Twitter} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={LinkedIn} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>

          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
                <li><Link to='/'>{appContext.languages[appContext.language].menu.home}</Link></li>
                <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.contact}</h3>
              <p className="grey-1-color">
                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030
              </p>
              <p className="grey-1-color">
              suporte@escoladnc.com.br
              </p>
              <p className="grey-1-color">
              (19) 99187-4342
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-1-color">Copyright © DNC - 2024</p>
          <div className="langs-area d-flex">
            <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}>
              <img src={Brasil} height={29} alt="" />
            </Button>
            <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
              <img src={USA} height={29} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}