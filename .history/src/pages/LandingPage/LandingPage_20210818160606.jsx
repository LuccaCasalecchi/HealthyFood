import React from "react";
import Header from "../../components/Header/Header";
import Illustration from "../../images/Illustration.svg";
import Input from "../../components/Input/Input";
import "./LandingPage.css";
import Recipes from "../../components/Recipes/Recipes";
import Main from "../../components/Main/Main";

export default function LandingPage() {
  return (
    <>
      <Main/>
      <Recipes/>
    </>
  );
}
