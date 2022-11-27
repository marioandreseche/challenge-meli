import React, {useState} from "react";
import "./Styles.scss";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    navigate(`/items?search=${inputValue}`, {
      state: inputValue,
    });
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubMit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      // setCategorias((categorias) => [inputValue, ...categorias]);
      setInputValue("");
    }
  };
  return (
    <header>
      <div className="container">
        <div className="div-img">
          <img src={require("../../assets/icons/meli-icono.jpg")} alt="Mercado Libre" />
        </div>
        <div className="div-input">
          <form onSubmit={handleSubMit}>
            <input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Nunca dejes de buscar"></input>
          </form>
        </div>
        <div>
          <button value={"buscar"} onClick={handleClick}>
            {" "}
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
