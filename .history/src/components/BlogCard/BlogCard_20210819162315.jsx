import React from 'react'
import './Blog.css'

export default function BlogCard({image,title,avatar,name}) {
  return (
    <div>
      <article className='article'>
      <img className='article__image' src={image} alt={title}/>
      <div className='article__details'>
        <p className='article__title'>{title}</p>
        <div className='article__author'>
          <img
            className='author__image'
            src={avatar}
            alt={name}
          />
          <p className='author__name'>{props.authorName}</p>
        </div>
      </div>
    </article>
    </div>
  )
}
