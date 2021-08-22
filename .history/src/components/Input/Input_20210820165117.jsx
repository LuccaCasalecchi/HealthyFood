import React from 'react'
import {BiSearch} from 'react-icons/bi'
import './Input.css'

export default function Input({title,placeholderProp}) {
  return (
    <div className="input-container">
      <input 
      type="text"
      placeholder={placeholderProp}/>

      <button><BiSearch/></button>
    </div>
  )
}
