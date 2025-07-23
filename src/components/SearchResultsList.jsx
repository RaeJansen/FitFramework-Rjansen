import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ searchResults, path }) => {
  return (
    <div className="results-list">
      {searchResults.map((result, id) => {
        return <SearchResult result={result} />;
      })}
    </div>
  );
};

export default SearchResultsList;
