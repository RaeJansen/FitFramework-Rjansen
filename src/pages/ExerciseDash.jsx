import React from "react";
import NavBtn from "../components/NavBtn";

export default function ExerciseDash() {
  return (
    <div>
      <p>Exercise Page Content</p>\<NavBtn to="/exercise/search">Search</NavBtn>
      <NavBtn to="/exercise/category">Categories</NavBtn>
    </div>
  );
}
