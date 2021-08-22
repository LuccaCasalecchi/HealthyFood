import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import api from '../../api/api'

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
  const [complement,setComplement] = useState("")

  const {goBack} = useHistory();

  //get the adress from user
  async function getUserAdress(){
    try{
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
      setCity(response.data.localidade)
      setUf(response.data.uf)
      setAdress(response.data.logradouro)
      setDistrict(response.data.bairro)
      setComplement(response.data.complemento)
    }catch(error){
      setCity("")
      setUf("")
      setAdress("")
      setDistrict("")
      setComplement("")
    }
  }

  function handleSubmit(e){
    e.preventDefault()

    const userData={
      name: e.target.elements.name.value,
      birthday: e.target.elements.birthday.value,
      CPF: e.target.elements.CPF.value,
      CEP: e.target.elements.CEP.value,
      address: e.target.elements.address.value,
      district: e.target.elements.district.value,
      complement: e.target.elements.complement.value,
      city: e.target.elements.city.value,
      UF: e.target.elements.UF.value
    }

    localStorage[`healthyFoodCommerce${userData.CPF}Registry`] = JSON.stringify(userData);
  }

  


  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <form>
          <Input placeholderProp="Nome" id="name" required={true} />
          <Input placeholderProp="Data de Nascimento" id="birthday" required={true}  />
          <Input placeholderProp="CPF" />
          <Input placeholderProp="CEP" />
          <Input placeholderProp="Rua" />
          <Input placeholderProp="Bairro" />
          <Input placeholderProp="Cidade" />
          <Input placeholderProp="Estado" />
          <Button title="SUBSCRIBE" typeProp="submit" />
        </form>
      </div>
      <img src={imageService} alt="Register" />
    </div>
  );
}
