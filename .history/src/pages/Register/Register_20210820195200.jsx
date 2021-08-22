import React from "react";
import Button from '../../components/Button/Button'
import Input from "../../components/Input/Input";
import Image from "../../images/bloco_services.svg";

import "./Register.css";

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
        
      </div>
      <img src={Image} alt="Register" />
    </div>
  );
}
