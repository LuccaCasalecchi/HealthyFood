import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import imageService from "../../images/bloco_services.svg";
import "./Register.css";


const schema = yup.object().shape({
  name:yup
  .string()
  .required("Name is Required")
  .max(50, "Character limit exceeded"),
  
  birthday: yup.string().required("Date is Required"),

  cpf: yup
  .string()
  .required("CPF is required")
  .max(11,"Character limit exceeded")
  .min(11,"This field requires at least 11 characters"),

  cep:yup
  .string()
  .required("CEP is required")
  .max(8,"Character limit exceeded")
  .min(8,"This field requires at least 11 characters")
})

export default function Register() {
  //declare state os inputs
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [district, setDistrict] = useState("");
  const { goBack } = useHistory();

  const{handleSubmit,register,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

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

  function Submit() {
    

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
        <form onSubmit={handleSubmit(Submit)} action='/'>
          <Input 
          {...register("name",{required:true})}
          name="name"
          placeholderProp="Nome" 
          id="name" 
          
          />
          
          <Input
            name="birthday"
            {...register("birthday",{required:true})}
            placeholderProp="Data de Nascimento"
            id="birthday"
            type="date"
            error={errors.birthday?.message}
          />
          <Input 
          name="CPF"
          {...register("CPF",{required:true})}
          placeholderProp="CPF" 
          id="CPF" 
          
          />
          
          <Input
            name="CEP"
            {...register("CEP",{required:true})}
            placeholderProp="CEP"
            id="CEP"
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
