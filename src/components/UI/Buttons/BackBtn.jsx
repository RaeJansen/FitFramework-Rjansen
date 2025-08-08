import React from "react";
import "../../../styles/buttons.scss";
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  let navigate = useNavigate();
  return (
    <button
      className="btn back-btn sm-button"
      onClick={() => {
        navigate(-1);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 16">
        <path
          d="M7 1.5 1 8l6 6.5"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );
}
