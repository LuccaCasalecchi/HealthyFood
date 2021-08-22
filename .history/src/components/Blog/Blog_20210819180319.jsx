import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import './Blog.css'

import image1 from '../../images/bloco1.svg'
import image2 from '../../images/bloco_image_2.svg'
import image3 from '../../images/bloco_image_3.svg'
import image4 from '../../images/bloco_image_4.svg'


import imageAuthor1 from '../../images/author_1.png'
import imageAuthor2 from '../../images/author_2.png';
import imageAuthor3 from '../../images/author_3.png';
import imageAuthor4 from '../../images/author_4.png';

export default function Blog() {
  return (
    <div>
      <section className='blog' id='blog'>
      <p className='blog__title'>Read Our Blog</p>
      <p className='blog__description'>
        Far far away, behind the word mountains, far from the countries <br/>
        Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className='blog__carousel'>
        <BlogCard
            image={image1}
            title='Quick-start guide to nuts and seeds'
            avatar={imageAuthor1}
            name='Kevin Ibrahim'
        />
        <BlogCard
          image={image2}
          title='Nutrition: Tips for Improving Your Health'
          avatar={imageAuthor2}
          name='Mike Jackson'
        />
        <BlogCard
          image={image3}
          title='The top 10 benefits of eating healthy'
          avatar={imageAuthor3}
          name='Bryan McGregor'
        />
        <BlogCard
          banner={image4}
          title='What Makes a Healthy Diet?'
          avatar={imageAuthor4}
          name='Jashua'
        />
      </div>
    </section>
    </div>
  )
}
