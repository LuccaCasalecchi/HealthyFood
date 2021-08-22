import React from 'react'

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
