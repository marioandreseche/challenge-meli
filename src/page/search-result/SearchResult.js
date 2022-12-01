import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import CardItem from "../../components/card-item/CardItem";
import {useFetchItems} from "../../hooks/useFetchItems";
import "./Styles.scss";

const SearchResult = () => {
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
      <>
        <div className="div-categories">
          <div className="tex-categories">Electronica Audio y Video : pod | Reproductores</div>
        </div>
        <div className="div-container">
          <div className="div-container-item">
            {data.items.map((item) => {
              return <CardItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </>
    );
  }
};
export default SearchResult;
