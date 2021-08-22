import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav className='nav'>
    <Link className='nav__logo' to='/'><p>Healthy Food</p></Link>
    <div className='nav__menu'>
      <div className='menu__hamburguer'>
        <input id='hamburguer__checkbox' type="checkbox" />

        <label htmlFor="hamburguer__checkbox">
          <span></span>
          <span></span>
          <span></span>
        </label>
        
        <ul className='menu__list'>
          <li className='list__item'>
            <a href='/#recipes' >HEALTHY RECIPES</a>
          </li>
          <li className='list__item'>
            <a href='/#blog'>BLOG</a>
          </li>
          <li className='list__item'>
            <a href='/#join'>JOIN</a>
          </li>
          <li>
            <Link className='item__register' to='/Register'>REGISTER</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
