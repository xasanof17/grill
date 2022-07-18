import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'
import { BiSearch } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import './_navbar.scss'
import { Input } from '../../components'

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [value, setValue] = useState('')

  const Focused = () => {
    setShowSearch((prev) => !prev)
    window.addEventListener('click', function (e) {
      if (e.target !== document.querySelector('.input')) {
        setShowSearch(false)
      }
    })
  }
  const handleChange = (e) => {
    setShowSearch(e.target.value)

    console.log('value is:', e.target.value);
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="container">
          <div className="header-nav_content">
            <div className="smallscreen">
              <button className="smallscreen_btn">
                <FiMenu />
                <span>меню</span>
              </button>
            </div>
            <Link to="/" className='logo'>
              LOGOS
            </Link>
            <div className="header-nav_content-block">
              <div className="header-nav_content-block_search" onFocus={Focused}>
                <form action="" className="header-nav_content-block_search-form">
                  <button className='header-nav_content-block_search-form_location'><GrLocation /></button>
                  <Input type="search" placeholder="Введите адрес доставки" name="search" value={value} />
                  <button type='submit' className='header-nav_content-block_search-form_search'><BiSearch /></button>
                </form>
                <div className={showSearch ? 'header-nav_content-block_search-list showsearch' : 'header-nav_content-block_search-list'}>
                  <ul>
                    <li>
                      <Link to="/">Москва, Часовая улица, 11/3с1 </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-nav_content-block_tel">
                <a href="tel:+998 88 033 00 70">
                  <button className="header-nav_content-block_tel-btn">
                    <MdOutlinePhoneInTalk />
                  </button>
                </a>
                <div className="header-nav_content-block_tel-number">
                  <span>Контакты:</span>
                  <a href="tel:+998 90 019 85 05">+998 90 019 85 05</a>
                </div>
              </div>
            </div>
            <button className="header-nav_content-btn">
              <span className="icon"><IoCartOutline /></span>
              <p>Корзина</p>
              <div />
              <span>0</span>
              <p className="small">Корзина</p>
            </button>
          </div>

          <div className="header-nav_content-small_search">
            <form action="" className="header-nav_content-block_search-form">
              <button className='header-nav_content-block_search-form_location'><GrLocation /></button>
              <Input type="search" placeholder="Введите адрес доставки" />
              <button type='submit' className='header-nav_content-block_search-form_search'><BiSearch /></button>
            </form>

          </div>

        </div>

      </nav>
    </header>
  )
}

export default Navbar