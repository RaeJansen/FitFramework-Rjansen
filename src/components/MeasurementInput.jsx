import React from "react";

export default function DoubleFormInput({ type, className, name }) {
  return (
    <form action="POST" className="measurement">
      <label htmlFor="measurement-input"></label>
      <input
        type="number"
        name="{id}"
        id="{id}"
        placeholder="#"
        className="{className}"
      />
      <input type="submit" value="Log" className="log-btn" />
    </form>
  );
}
