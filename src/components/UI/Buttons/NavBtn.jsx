import { NavLink } from "react-router-dom";
import "../../../styles/buttons.scss";

// Buttons as Links for routing changes
export default function NavBtn({ className, to, children }) {
  return (
    //btn will always be added as a class, as well as any class we add on
    <button className={className ? `btn ${className}` : "btn"}>
      <NavLink to={to}>{children}</NavLink>
    </button>
  );
}
