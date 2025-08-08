// used to help build search: https://www.youtube.com/watch?v=sWVgMcz8Q44&ab_channel=CodeComplete
import "../../../styles/search.scss";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <SearchBar setSearchResults={setSearchResults} id="food" />
      <SearchResultsList searchResults={searchResults} />
    </div>
  );
}
