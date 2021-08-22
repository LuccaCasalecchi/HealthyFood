import React from "react";
import Input from "../../components/Input/Input";
import imageService from "../../images/bloco_services.svg";
import './Register.css'
import Button from '../../components/Button/Button'

export default function Register() {
  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <form>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        </form>
        <Button />
      </div>
      <img src={imageService} alt="Register" />
    </div>
  );
}
