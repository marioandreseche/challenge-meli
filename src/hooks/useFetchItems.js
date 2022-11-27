import {useState, useEffect} from "react";
import {getItems} from "../helpers/getItems";

export const useFetchItems = (text) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getItems(text).then((data) => {
      setstate({
        data,
        loading: false,
      });
    });
  }, [text]);
  return state;
};
