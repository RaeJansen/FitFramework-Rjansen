import React from "react";
import NavBtn from "../components/NavBtn";

export default function UserProfile() {
  return (
    <div>
      <p>User Profile Page</p>
      <NavBtn to="/profile/settings">Settings</NavBtn>
    </div>
  );
}
