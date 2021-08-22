import React from 'react'
import Input from '../Input/Input'
import Illustration from '../../images/Illustration.svg'
import Header from '../Header/Header'
import './Main.css'

export default function Main() {
  return (
    <div>
      <div className="search-recipes">
        <div className="subtitle">
          <h2>Ready for<br />Trying a New<br />Recipe ?</h2>
          <div className="input-container">
          <Input/>
          </div>
        </div>
        <img src={Illustration} alt="" />
      </div>
    </div>
  )
}
