import React from 'react'
import Input from '../Input/Input'
import Illustration from '../../images/Illustration.svg'
import Header from '../Header/Header'
import './Main.css'

export default function Main() {
  return (
    <main className='main'>
      <Header/>
      <div className='main__search'>
        <label htmlFor='search'>Ready for <br/> Trying a new</label>
        <div className="search__input">
          <input id='search' type="text" placeholder='Search healthy recipes'/>
          <button><img src={iconSearch} alt="Search"/></button>
        </div>
      </div>
      <div className='main__illustration'>
        <img src={Illustration} alt="Illustration"/>
      </div>
    </main>
  )
}
