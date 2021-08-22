import React from 'react'
import FinalImage from '../../images/final-image.svg'
import './Membership.css'

export default function Membership() {
  return (
    <div>
      <section className='join' id='join'>
      <div className='join__email'>
        <label htmlFor='email'>Join our membership to get special offer</label>
        <div className="email__input">
          <input id='email' type="email" placeholder='Enter your email address'/>
          <button>Join</button>
        </div>
      </div>
      <div className='join__image'>
        <img src={FinalImage} alt="Join"/>
      </div>
    </section>
    </div>
  )
}
