import React from 'react'
import './Input.css'

export default function Input({name,title,placeholderProp,id,type,...rest}) {
  return (
    <div className="input-container">
      <input 
      type={type}
      placeholder={placeholderProp}
      id={id}
      title={title}
      {...rest}
      />
    </div>
  )
}
