import React from "react";
import NavBtn from "../components/NavBtn";

export default function NutritionDash() {
  return (
    <div>
      <p>Nutrition page content.</p>
      <NavBtn to="/nutrition/log-food">Log Food</NavBtn>
      <NavBtn to="/nutrition/create-a-food">Create A Food</NavBtn>
    </div>
  );
}
