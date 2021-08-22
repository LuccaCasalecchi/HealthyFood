import React from "react";
import Card from '../Card/Card'

import './Recipes.css'
import FoodOne from '../../images/comida_1.svg';
import FoodTwo from '../../images/comida_2.svg';
import FoodThree from '../../images/comida_3.svg';
import FoodFour from '../../images/comida_4.svg';

export default function Recipes() {
  return (
    <section className='recipes' id='recipes'>
      <div className='recipes__introduction'>
        <p className='introduction__title'>Our Best Recipes</p>
        <p className='introduction__description'>
          Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
      </div>
      <div className='recipes__best'>
        <Card image={FoodOne} title='Broccoli Salad with Bacon'/>
        <Card image={FoodTwo} title='Classic Beef Burgers'/>
        <Card image={FoodThree} title='Classic Potato Salad'/>
        <Recipe image={FoodFour} title='Cherry Cobbler on the Grill'/>
      </div>
    </section>
  );
}
