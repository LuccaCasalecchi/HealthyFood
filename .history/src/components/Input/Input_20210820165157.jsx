import React from 'react'
import './Input.css'

export default function Input({title,placeholderProp}) {
  return (
    <div className="input-container">
      <input 
      type="text"
      placeholder={placeholderProp}/>
    </div>
  )
}
