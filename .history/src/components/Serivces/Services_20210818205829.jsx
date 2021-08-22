import React from 'react'
import blocoServices from '../../images/bloco_services'
export default function Services() {
  return (
    <div>
      <section className='services' id='services'>
      <div className='services__image'>
        <img src={blocoServices} alt="Healthy Food Services"/>
      </div>
      <div className='services__information'>
        <p className='service__title'>
        The best services ready
        To serve you
        </p>
        <p className='service__description'>
          Far far away, behind the word mountains,  far from the countries 
          Vokalia and Consonantia, there live the blind texts.
          <br/><br/>
          Separated they live in Bookmarksgrove right at the coast of the 
          Semantics, a large language ocean.
          <br/><br/>
          A small river named Duden flows by their place and supplies it with 
          the necessary regelialia.
        </p>
        <button className='service__button'>Know More</button>
      </div>
    </section>
    </div>
  )
}
