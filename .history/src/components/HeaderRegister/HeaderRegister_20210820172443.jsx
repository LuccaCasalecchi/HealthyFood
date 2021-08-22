import React from "react";

export default function HeaderRegister() {
  return (
    <div>
      <nav className="nav">
        <a className="nav__logo" to="/">
          <p>Healthy Food</p>
        </a>
        <div className="nav__menu">
          <div className="menu__hamburguer">
            <input id="hamburguer__checkbox" type="checkbox" />

            <label htmlFor="hamburguer__checkbox">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <ul className="menu__list">
              <li className="list__item">
                <a href="/#recipes">HEALTHY RECIPES</a>
              </li>
              <li className="list__item">
                <a href="/#blog">BLOG</a>
              </li>
              <li className="list__item">
                <a href="/#join">JOIN</a>
              </li>
              <li>
                <a className="item__register" to="/Register">
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
