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
      set
    }catch(error){

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
