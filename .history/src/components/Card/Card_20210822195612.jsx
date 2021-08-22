import React from 'react'
import './Card.css'

export default function Card({image, title}) {
  return (
    <div>
      <article className='recipe'>
      <img className='recipe__image' src={image} alt={title}/>
      <div className="recipe__data">
        <p className='recipe__title'>{title}</p>
        <button className='recipe__button' to='/'>See Recipe</button>
      </div>
    </article>
    </div>
  )
}
