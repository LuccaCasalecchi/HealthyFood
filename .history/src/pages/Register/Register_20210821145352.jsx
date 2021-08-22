import React,{useState} from "react";
import Input from "../../components/Input/Input";
import imageService from "../../images/bloco_services.svg";
import './Register.css'
import Button from '../../components/Button/Button'

export default function Register() {


  const [name,setName] = useState("")
  const [city,setCity] = useState("")
  const [uf,setUf] = useState("")
  const [cep,setCep] = useState("")
  const [adress,setAdress] = useState("")
  const [district,setDistrict] = useState("")
  
  
  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <form>
          <Input placeholderProp = "Nome" />
          <Input placeholderProp = "Data de Nascimento"  />
          <Input placeholderProp = "CPF"  />
          <Input placeholderProp = "CEP"  />
          <Input placeholderProp = "Rua"  />
          <Input placeholderProp = "Bairro"  />
          <Input placeholderProp = "Cidade" />
          <Input placeholderProp = "Estado"  />
          <Button 
        title="SUBSCRIBE" 
        typeProp="submit"/>
        </form>
        
      </div>
      <img src={imageService} alt="Register" />
    </div>
  );
}
