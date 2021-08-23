import React from 'react'
import './Input.css'

export default function Input({name,title,placeholderProp,id,type,pattern,...rest}) {
  return (
    <div className="input-container">
      <input 
      name={name}
      type={type}
      placeholder={placeholderProp}
      id={id}
      title={title}
      pattern={pattern}
      {...rest}
      />
    </div>
  )
}
