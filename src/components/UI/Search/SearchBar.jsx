import React, { useState } from "react";

export default function SearchBar({ id, setSearchResults }) {
  //useState to save user's search inputs
  const [input, setInput] = useState("");

  // queries api, turns response into .json string
  const fetchData = (value) => {
    //placeholder json string (replace with prop for more flexibility??)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          // checking to see if value matches any results from API
          // filtering should be done in backend, just for testing
          return (
            value && // value makes it return nothing if input is empty
            user && // object being searched
            user.name && // key on object being searched
            user.name.toLowerCase().includes(value.toLowerCase()) // sees if it matches user input value
          );
        });
        setSearchResults(results);
      });
  };

  const handleChange = (value) => {
    //sets input useState to value
    setInput(value);
    //inputs value to fetchdata function
    fetchData(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        name={`search-${id}`}
        id={`search-${id}`}
        placeholder={`Search ${id}...`}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
