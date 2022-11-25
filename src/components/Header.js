import React from "react";
import "./Styles.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="div-img">
          <img src={require("../assets/icons/meli-icono.jpg")} alt="Mercado Libre" />
        </div>
        <div className="div-input">
          <form>
            <input placeholder="Nunca dejes de buscar"></input>
          </form>
        </div>
        <div>
          <button value={"buscar"}> Buscar</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
