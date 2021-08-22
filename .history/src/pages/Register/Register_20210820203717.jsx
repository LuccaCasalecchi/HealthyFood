import React from "react";
import Input from "../../components/Input/Input";
import imageService from "../../images/bloco_services.svg";
import './Register.css'

export default function Register() {
  return (
    <div className="container">
      <div>
        <h1>Subscribe to receive news and products 🤗</h1>
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
      <img src={imageService} alt="Register" />
    </div>
  );
}
