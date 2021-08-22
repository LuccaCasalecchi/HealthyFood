import React from "react";

import HeaderRegister from "../../components/HeaderRegister/HeaderRegister";
import Input from '../../components/Input/Input'

import "./Register.css";

export default function Register() {
  return (
    <section className='register'>
      <HeaderRegister/>
      <div className='register__form'>
        <form className='form'>
          <fieldset className='form__fieldset'>
            <legend className='fieldset__legend'>Personal</legend>
            <Input
              id='name'
              type='text'
              placeholder='Enter your name'
              pattern='[a-zA-Z ]+$'
              title='Must contain letters only.'
              required={true}
            />
            <Input
              id='birthday'
              type='date'
              placeholder='Choose your birthday'
              title='Choose your birthday.'
              required={true}
            />
            <Input
              id='CPF'
              type='text'
              placeholder='Enter your CPF'
              pattern='[0-9]{11}'
              title='Must contain numbers only.'
              required={true}
            />
          </fieldset>
          <fieldset className='form__fieldset'>
          <legend className='fieldset__legend'>Address</legend>
            <Input
              id='CEP'
              type='text'
              placeholder='Enter your CEP'
              pattern='[0-9]{8}'
              title='Must contain numbers only.'
              
            />
            <Input
              id='address'
              type='text'
              placeholder='Enter your address'
              
              required={true}
              
            />
            <Input
              id='number'
              type='number'
              placeholder='Number'
              pattern='[0-9]+$'
              title='Must contain numbers only.'
              required={true}
            />
            <Input
              id='complement'
              type='text'
              placeholder='Complement'
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
            <Input
              id='district'
              type='text'
              placeholder='Enter your district'
              required={true}
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <Input
              id='city'
              type='text'
              placeholder='Enter your city'
              required={true}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              id='UF'
              type='text'
              placeholder='UF'
              pattern='[A-Za-z]{2}'
              title='Must contain at least two letters.'
              required={true}
              value={uf}
              onChange={(e) => setUF(e.target.value)}
            />
          </fieldset>
          <button type='submit'>Register</button>
        </form>
      </div>
    </section>
    
  );
}
