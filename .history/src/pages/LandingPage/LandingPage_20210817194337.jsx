import React from 'react'
import Header from '../../components/Header/Header'
import Illustration from '../../images/Illustration.svg'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="components-container">
      <Header/>
      <div className="search-recipes">
        <h2>Ready for<br/>
        Trying a New<br/>
        Recipe ?</h2>
        <img src={Illustration} alt="" />
      </div>
    </div>
  )
}
