import React from "react";
import {useNavigate} from "react-router-dom";
import "./Styles.scss";

const CardItem = ({item}) => {
  const navigate = useNavigate();
  const onClickItem = (id) => {
    navigate(`/items/${id}`, {
      state: id,
    });
  };
  return (
    <div onClick={() => onClickItem(item.id)} className="container-card">
      <img className="img" src={item.picture} alt="Mercado Libre" />
      <div className="container-card-info">
        <div className="card-info">
          <h2>
            $ {item.price.currency.toLocaleString("es")}
            {item.price.free_shipping ? (
              <img
                className="img-icon-green"
                src={require("../../assets/icons/icon-green.png")}></img>
            ) : null}
          </h2>
          <div>
            <p>{item.condition}</p>
          </div>
        </div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default CardItem;
