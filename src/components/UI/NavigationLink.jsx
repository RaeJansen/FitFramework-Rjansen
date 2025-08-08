import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

// function to make own Link paremeters (using react-router-dom's Link with svgs doesnt work)
export default function NavigationLink({ to, children, navElement }) {
  // for determining whether current path is active
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <NavLink
      to={to}
      // navElement to add classes to navigation
      className={`nav-flex ${navElement} ${
        isActive ? `active-${navElement}` : ""
      }`}
    >
      {children}
    </NavLink>
  );
}
