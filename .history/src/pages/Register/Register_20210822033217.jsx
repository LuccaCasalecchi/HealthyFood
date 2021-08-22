import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/api";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import imageService from "../../images/bloco_services.svg";
import "./Register.css";

export default function Register() {
  //declare state os inputs
  const { goBack } = useHistory();

  const [cep, setCEP] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  async function getAddress(cep) {
    try {
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data.logradouro);
      setComplement(response.data.complemento);
      setDistrict(response.data.bairro);
      setCity(response.data.localidade);
      setUF(response.data.uf);
    } catch (error) {
      setAddress('');
      setComplement('');
      setDistrict('');
      setCity('');
      setUF('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userRegister = {
      name: event.target.elements.name.value,
      birthday: event.target.elements.birthday.value,
      CPF: event.target.elements.CPF.value,
      CEP: event.target.elements.CEP.value,
      address: event.target.elements.address.value,
      number: event.target.elements.number.value,
      complement: event.target.elements.complement.value,
      district: event.target.elements.district.value,
      city: event.target.elements.city.value,
      UF: event.target.elements.UF.value
    };

    localStorage[`healthyFoodCommerce${userRegister.CPF}Registry`] = JSON.stringify(userRegister);

    goBack();
  }

  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
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
             <Input
              id='CEP'
              type='text'
              placeholder='Enter your CEP'
              pattern='[0-9]{8}'
              title='Must contain numbers only.'
              required={true}
              onChange={(e) => setCEP(e.target.value)}
              onBlur={(e) => getAddress(cep)}
            />
            <Input
              id='address'
              type='text'
              placeholder='Enter your address'
              value={address}
              required={true}
              onChange={(e) => setAddress(e.target.value)}
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
          <Button title="SUBSCRIBE" typeProp="submit" />
        </form>
      </div>
      <img src={imageService} alt="Register" />
    </div>
  );
}
