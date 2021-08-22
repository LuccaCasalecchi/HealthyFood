import React from "react";

import HeaderRegister from "../../components/HeaderRegister/HeaderRegister";
import Input from "../../components/Input/Input";

import "./Register.css";

export default function Register() {
  return (
    <section className="register">
      <HeaderRegister />
      <div className="register__form">
        <form className="form">
          
          <fieldset className="form__fieldset">
            <legend className="fieldset__legend">Preencha seus dados</legend>
            <Input />
            <Input />
            <Input />
            <Input id="complement" type="text" placeholder="Complement" />
            <Input />
            <Input />
            <Input />
          </fieldset>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}
