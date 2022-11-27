import React from "react";
import {useLocation} from "react-router-dom";
import {useFetchItems} from "../hooks/useFetchItems";
const Resultado = () => {
  const location = useLocation();
  let {state} = location;
  if (state === null) {
    state = location.search.split("search=")[1];
  }
  const {data, loading} = useFetchItems(state);
  if (loading) {
    return <p>Loading</p>;
  }
  if (!loading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
          height: "50%",
        }}>
        {data.items.map((item) => {
          return (
            <div
              style={{
                width: "80%",
                backgroundColor: "white",
                height: "100%",
                marginBottom: "2px",
                display: "flex",
                justifyContent: "flex-start",
              }}>
              <div>
                <img style={{width: "250px"}} src={item.picture} alt="Mercado Libre" />
              </div>
              <div>
                <p style={{fontSize: "24px", fontWeight: "bold", marginLeft: "20px"}}>
                  ${item.price.currency.toLocaleString("es")}
                </p>
                <p style={{fontSize: "24px", marginLeft: "20px"}}>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Resultado;
