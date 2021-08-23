import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/api";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import imageService from "../../images/bloco_services.svg";
import "./Register.css";

export default function Register() {
  //declare state os inputs
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [district, setDistrict] = useState("");
  

  const { goBack } = useHistory();

  //get the adress from user
  async function getUserAdress(cep) {
    try {
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCity(response.data.localidade);
      setUf(response.data.uf);
      setAdress(response.data.logradouro);
      setDistrict(response.data.bairro);
      
    } catch (error) {
      setCity("");
      setUf("");
      setAdress("");
      setDistrict("");
      
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name: e.target.elements.name.value,
      birthday: e.target.elements.birthday.value,
      CPF: e.target.elements.CPF.value,
      CEP: e.target.elements.CEP.value,
      adress: e.target.elements.adress.value,
      district: e.target.elements.district.value,
      city: e.target.elements.city.value,
      UF: e.target.elements.UF.value,
    };

    localStorage[`healthyFoodCommerce${userData.CPF}Registry`] =
      JSON.stringify(userData);
      goBack()
  }

  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} action='/'>
          <Input placeholderProp="Nome" id="name" required={true} />
          <Input
            placeholderProp="Data de Nascimento"
            id="birthday"
            required={true}
            type="date"
          />
          <Input placeholderProp="CPF" id="CPF" required={true} />
          <Input
            placeholderProp="CEP"
            id="CEP"
            required={true}
            onChange={(e) => setCep(e.target.value)}
            onBlur={(e) => getUserAdress(cep)}
          />
          <Input
            placeholderProp="Rua"
            id="adress"
            required={true}
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <Input
            placeholderProp="Bairro"
            id="district"
            required={true}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <Input
            placeholderProp="Cidade"
            id="city"
            required={true}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            placeholderProp="Estado"
            id="UF"
            required={true}
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
          <Button title="SUBSCRIBE" typeProp="submit" />
        </form>
      </div>
      <img src={imageService} alt="Register" />
    </div>
  );
}
