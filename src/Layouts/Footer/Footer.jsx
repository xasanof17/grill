import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronUp} from 'react-icons/bs'
import './_footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content row">
          <div className="footer__content-button col-md-1">
            <button className='footer__content-button_btn' onClick={() => console.log('clicked')}>
              <BsChevronUp/>
            </button>
          </div>
          <div className="footer__content-inner col-12 col-md-3">
            <Link to='/' className="logo">LOGOS</Link>
            <p>© ООО СК «АПШЕРОН» Все права защищены. 2010-2020</p>
            <ul>
              <a href='/'>Пользовательское соглашение</a>
              <a href='/'>Карта сайта</a>
              <a href='/'>Политика конфиденциальности</a>
            </ul>
          </div>
          <div className="footer__content-list col-md-8">
            <ul>
              <li><Link to='/'>О ресторане</Link></li>
              <li><Link to='/'>Условия доставки</Link></li>
              <li><Link to='/'>Возврат товара</Link></li>
              <li><Link to='/action'>Акции</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer