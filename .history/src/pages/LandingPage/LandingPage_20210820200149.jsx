import React from "react";
import "./LandingPage.css";
import Main from "../../components/Main/Main";
import Recipes from "../../components/Recipes/Recipes";
import Services from "../../components/Serivces/Services";
import Blog from "../../components/Blog/Blog";
import Membership from "../../components/Membership/Membership";

import Footer from '../../components/Footer/Footer'


export default function LandingPage() {
  return (
    <>
      <Main/>
      <Recipes/>
      <Services/>
      <Blog/>
      <Membership/>
      <Footer/>
    </>
  );
}
