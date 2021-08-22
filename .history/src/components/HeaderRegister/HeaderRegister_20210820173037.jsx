import React from "react";
import './HeaderRegister.css'

export default function HeaderRegister() {
  return (
    <div>
      <nav className="nav_register">
        <a className="nav__logoreg" to="/">
          <p>Healthy Food</p>
        </a>
        <div className="nav__menureg">
          <div className="menu__hamburguereg">
            <input id="hamburguer__checkboxreg" type="checkbox" />

            <label htmlFor="hamburguer__checkboxreg">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <ul className="menu__listreg">
              <li className="list__itemreg">
                <a href="/#recipes">HEALTHY RECIPES</a>
              </li>
              <li className="list__itemreg">
                <a href="/#blog">BLOG</a>
              </li>
              <li className="list__itemreg">
                <a href="/#join">JOIN</a>
              </li>
              <li>
                <a className="item__registereg" to="/Register">
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
