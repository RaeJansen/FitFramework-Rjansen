import React from "react";

export default function SearchLink({ id }) {
  return (
    <form action="GET">
      <label htmlFor={`${id}-search`}>Search `${id}`</label>
      <input
        type="text"
        name={`${id}-search`}
        id={`${id}-search`}
        placeholder={`Search ${id}...`}
      />
    </form>
  );
}
