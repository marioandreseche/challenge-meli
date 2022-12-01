import {useState, useEffect} from "react";
import {getItemById} from "../helpers/getItemById";
import {getItems} from "../helpers/getItems";

export const useFetchItemsById = (id) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getItemById(id).then((data) => {
      setstate({
        data,
        loading: false,
      });
    });
  }, [id]);
  return state;
};
