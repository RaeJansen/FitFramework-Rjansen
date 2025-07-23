import React from "react";
import "../styles/btn.scss";
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  let navigate = useNavigate();
  return (
    <button
      className="btn back-btn"
      onClick={() => {
        navigate(-1);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 29">
        <path
          d="M14 2 2 14.5 14 27"
          stroke="#fff"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Back
    </button>
  );
}
