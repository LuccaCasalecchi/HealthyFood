import React from 'react'
import './Input.css'

export default function Input({title}) {
  return (
    <div className="input-container">
      <input 
      type="text"
      placeholder="Search healthy recipes"/>

      <button>{title}</button>
    </div>
  )
}
