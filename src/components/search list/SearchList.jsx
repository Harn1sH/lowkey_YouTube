import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_API } from "../../utils/constants";
import SearchTile from "./searchTile";

function SearchList() {
  const [searchParams] = useSearchParams();
  const [searchVid, setSearchVids] = useState([]);

  const getData = async () => {
    const data = await fetch(SEARCH_API + searchParams.get("s"));
    const jsonData = await data.json();
    setSearchVids(jsonData.items);
    console.log(searchVid.items);
  };

  useEffect(() => {
    getData();
  }, [searchParams]);
  return (
    <div className={"my-9"}>
      {searchVid?.map((video) => {
        return (
          <Link to={`/watch/?v=${video.id.videoId}`} key={video}>
            {" "}
            <SearchTile video={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default SearchList;
