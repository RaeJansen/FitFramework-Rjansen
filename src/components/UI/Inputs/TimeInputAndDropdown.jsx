import React from "react";
import "../../../styles/inputs.scss";

export default function TimeInputAndDropdown() {
  return (
    <>
      <input
        type="time"
        name="log-time"
        id="log-time"
        className="time-meal-input"
      />
      <select name="meal-select" id="meal-select" className="time-meal-select">
        <option value="">Select a Meal</option>
        <option value="bfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </>
  );
}
