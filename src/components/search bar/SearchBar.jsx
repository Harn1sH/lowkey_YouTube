import React, { useEffect, useState } from "react";
import search from "../../assets/magnifying.svg";
import Suggestion from "./Suggestion";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../utils/Store/slice/searchSlice";
import { closeSearch, openSearch } from "../../utils/Store/slice/appSlice";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchVal, setSearchVal] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState();
  const cache = useSelector((store) => store.search);
  const showSuggestions = useSelector((store) => store.app.isSearchOpen);
  const dispatch = useDispatch();

  const searchResult = async () => {
    try {
      const data = await fetch(
        "http://suggestqueries.google.com/complete/search?client=firefox&gl=in&ds=yt&q=" +
          searchVal,
      );
      const jsonData = await data.json();
      setSearchSuggestion(jsonData[1]);
      dispatch(cacheResults({ [searchVal]: jsonData[1] }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(openSearch());
    const timeOut = setTimeout(() => {
      if (cache[searchVal]) {
        setSearchSuggestion(cache[searchVal]);
      } else {
        searchResult();
      }
    }, 200);
    return () => clearTimeout(timeOut);
  }, [searchVal]);

  return (
    <div className={"col-span-10 flex justify-center"}>
      <div className="w-8/12 flex justify-center items-center">
        <input
          type="text"
          className=" w-full p-2 border-gray-400 border-t border-b border-l rounded-l-xl"
          placeholder={"Search"}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onFocus={() => dispatch(openSearch())}
          //onBlur={() => setShowSuggestions(false)}
        />

        <button
          className={
            "border-gray-400 border-t border-b p-2 px-4 rounded-r-2xl text-center bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200"
          }
          type="submit"
        >
          <img src={search} alt="search" className="h-6" />
        </button>
      </div>
      <div
        className={
          "w-[45.5%] flex justify-center items-center absolute mt-[65px] z-30"
        }
      >
        {showSuggestions && (
          <div
            className={" w-[100%] "}
            // onBlur={() => setShowSuggestions(false)}
          >
            {searchSuggestion?.length > 0 && (
              <ul
                className={
                  "flex flex-col  bg-white py-3  shadow-black rounded-lg shadow-lg"
                }
                onBlur={() => dispatch(closeSearch())}
              >
                {searchSuggestion?.map((suggest) => {
                  return <Suggestion key={suggest} suggest={suggest} />;
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
