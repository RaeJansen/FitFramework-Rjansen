import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

// function to make own Link paremeters (using react-router-dom's Link with svgs doesnt work)
export default function NavigationLink({ to, children, ...props }) {
  // for determining whether current path is active
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <NavLink
      to={to}
      // KRIS - please tell me what ...props is for haha
      {...props}
      className={isActive ? "active nav-flex" : "nav-flex"}
    >
      {children}
    </NavLink>
  );
}
