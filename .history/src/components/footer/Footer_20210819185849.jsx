import React from 'react'
import './Footer.css'

export default function footer() {
  return (
    <div>
      <footer className='footer' id='footer'>
      <div className='footer__copyright'>
        <p>© Copyrights 2021 Stack. All Rights Reserved.</p>
      </div>
      <div className="footer__links">
        <a href='#'>Privacy Policy</a>
        <a href='#'>Terms and Conditions</a>
      </div>
    </footer>
    </div>
  )
}
