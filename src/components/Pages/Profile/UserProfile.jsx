import React from "react";
import NavBtn from "../../UI/Buttons/NavBtn";

export default function UserProfile() {
  return (
    <div>
      <p>User Profile Page</p>
      <NavBtn to="/profile/settings">Settings</NavBtn>
    </div>
  );
}
