import { SUGGESTION_API } from "../constants";
import { useEffect, useState } from "react";

export const useSuggestion = (props) => {
  const [returnData, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch(
        "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
          props,
      );
      const jsonData = await data.json();
      setData(jsonData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [props]);
  return returnData;
};
