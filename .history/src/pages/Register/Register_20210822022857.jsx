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
      const repsonse = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
      setCity(repsonse.data.localidade)
      setUf(response.data.uf)
      setAdress(reponse.data.logradouro)
      setDistrict(reponse.data.bairro)
      setComplement(reponse.data.complemento)
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
    }
  }

  


  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <form>
          <Input placeholderProp="Nome" />
          <Input placeholderProp="Data de Nascimento" />
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
