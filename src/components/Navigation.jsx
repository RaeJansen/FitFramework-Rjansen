import { useState } from "react";
import "../styles/navbar.scss";
import NavigationLink from "./NavigationLink";

export default function NavBar() {
  // which navigation button is selected
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <nav className="navbar">
      {/* grid is working best for sizing in react */}
      <ul className="flex-grid">
        {/* exercise link */}
        <li
          className={
            activeNav === "exercise"
              ? "active-exercise nav-flex nav-col"
              : "exercise nav-flex nav-col"
          }
          onClick={() => setActiveNav("exercise") && setPageTitle("Exercise")}
        >
          <NavigationLink to="/exercise">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 32"
            >
              <path
                d="M25.87 12.5a1.4 1.4 0 0 0-1.31-.86H15.8l2.44-9.83a1.46 1.46 0 0 0-.72-1.64 1.44 1.44 0 0 0-1.76.32L.37 17.94a1.5 1.5 0 0 0-.24 1.56c.23.53.75.86 1.31.86h8.75L7.75 30.2a1.46 1.46 0 0 0 1.4 1.8c.4 0 .8-.17 1.08-.49l15.4-17.45c.38-.43.48-1.04.24-1.57m-13.9 12.65 1.47-5.89a1.46 1.46 0 0 0-1.4-1.8H4.66l9.36-10.61-1.46 5.89a1.44 1.44 0 0 0 1.4 1.8h7.38z"
                fill="#BF9ACA"
              />
            </svg>
            Exercise
          </NavigationLink>
        </li>
        {/* dashboard link */}
        <li
          className={
            activeNav === "dashboard"
              ? "active-dashboard nav-flex nav-col"
              : "dashboard nav-flex nav-col"
          }
          onClick={() => setActiveNav("dashboard")}
        >
          <NavigationLink to="/">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 34"
            >
              <path
                d="M26.56 11.4 19 22.62m17-3.74A16.8 16.8 0 0 1 29.65 32H8.35A16.9 16.9 0 0 1 2.1 16.92a16.8 16.8 0 0 1 9.56-13.27 17.1 17.1 0 0 1 16.4.95A16.9 16.9 0 0 1 36 18.9"
                stroke="#BF9ACA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Dashboard
          </NavigationLink>
        </li>
        {/* nutrition link */}
        <li
          className={
            activeNav === "nutrition"
              ? "active-nutrition nav-flex nav-col"
              : "nutrition nav-flex nav-col"
          }
          onClick={() => setActiveNav("nutrition")}
        >
          <NavigationLink to="/nutrition">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
            >
              <path
                d="M15.61 5.05 12.28 2M4.5 10.42c5.13-4.9 10.08-1.17 11.92.87 1.86-2.04 7.81-5.69 13.04-.8 6.53 6.12-.93 18.35-6.53 20.97-2.8 1.3-6.51-.05-6.51-.93 0 .88-2.75 2.19-5.5.88-5.5-2.63-12.84-14.87-6.42-21"
                stroke="#BF9ACA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Nutrition
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}
