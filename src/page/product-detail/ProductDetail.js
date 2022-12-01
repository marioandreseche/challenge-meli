import React from "react";
import {useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useFetchItemsById} from "../../hooks/useFetchItemById";
import "./Styles.scss";

const ProductDetail = () => {
  let {id} = useParams();
  const {data, loading} = useFetchItemsById(id);
  if (!loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90%",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <div>
          <p>Prueba - Prueba 2 </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "80%",
            height: "100%",
          }}>
          <div>
            <div style={{display: "flex"}}>
              <div style={{width: "70%", display: "flex", justifyContent: "center"}}>
                <img
                  className="imagen"
                  style={{width: "auto"}}
                  src={data.item.picture}
                  alt="Mercado Libre"
                />
              </div>
              <div>
                <h3>Descripción del producto</h3>
              </div>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: "70%"}}>
              <h3>Descripción del producto</h3>
              <p>{data.item.description}</p>
            </div>
          </div>
        </div>
        {/* <div className="div-container">
          <div className="card-main">
            <div className="div-img-1">
              <img style={{width: "500px"}} src={data.item.picture} alt="Mercado Libre" />
              <div style={{marginTop: "100px", marginBottom: "40px"}}>
                <h3>Descripción del producto</h3>
                <p>{data.item.description}</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="div-container">
          <div className="card-main">
            <div className="div-img-1">
              <div style={{width: "60%", display: "flex", flexDirection: "column"}}>
                <img style={{width: "500px"}} src={data.item.picture} alt="Mercado Libre" />
                <div style={{marginTop: "100px", marginBottom: "40px"}}>
                  <h3>Descripción del producto</h3>
                  <p>{data.item.description}</p>
                </div>
              </div>
              <div className="left-side-card">
                <h4>{"Nuevo - 234 vendidos"} </h4>
                <h4>{data.item.title} </h4>
                <button style={{height: "5%"}}>Comprar</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
};

export default ProductDetail;
