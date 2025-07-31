import { useState } from "react";
import "../../styles/navbar.scss";
import NavigationLink from "../UI/NavigationLink";

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
          {/* FitFramework Logo (Links to Dashboard) */}
          <NavigationLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 100 101"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.67 55.08s-9.97-4.74-22.03-1.01c4.1-3.83 11.94-8.75 14.52-9.89 2.35-1.03 10.5-1.32 11.41-1.35.62-1.06 10.51-30.55 38.84-24.71l.25.12C62 22.14 59.1 43.77 60.07 45.14c1 1.4 6.88 1.44 12.25 1.09 4.63-.31 8.89-.91 9.32-1.21-.24.26-12.43 13.93-26.1 12.38-.61 1.87-4.46 13.63-14.56 20.08-9.14 5.83-24.61 5.28-23.59 5.08 11.52-3.26 22.28-27.48 22.28-27.48"
                fill="url(#a)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.95 58.04c-3.37 9.9-9.74 17.78-17.06 21.32-8.7 4.2-20.7 4.1-21.65 3.88a.68.68 0 0 1-.04-1.32c1.96-.53 3.9-1.9 4.2-2.12 7.93-5.64 14.97-19.32 17.31-24.35l-.45-.18A33 33 0 0 0 27.5 53.3c-5.63-.08-9.45 1.34-9.78 1.38a.6.6 0 0 1-.49-1.04c.4-.4 1.38-1.2 1.5-1.3 4.57-3.79 11.75-8.17 13.62-8.8 2.68-.89 9.5-1.14 10.89-1.19 1.5-3.58 11.92-30.2 39.1-24.74.28.06.27.07.53.2.4.2.36.8-.12.92-.88.2-6.45 1.05-11.71 5.2-9.47 7.48-11 19.38-10.52 20.92 1.17 1.34 9.05 1.25 16.24.44 2.05-.23 4.03-.52 4.59-.73l.16-.07c.14-.05.55.01.66.38.08.29-.1.5-.12.53 0 0-2.53 2.88-6.58 5.88-9.85 7.33-17.14 6.97-19.52 6.77m-15.97-3.6.2.14c.08.06.27.35.19.68-.04.16-1.62 3.6-3.94 7.73-4.8 8.51-10.4 15.9-15.97 19 4.78-.15 14.05-1.1 20.3-5.12 10.52-6.77 14.1-19.44 14.26-19.75a.6.6 0 0 1 .58-.31c1.06.08 5.5.76 12.04-2.19 5.7-2.56 10.22-6.6 12.3-8.64q-.71.11-1.8.25c-4.08.5-15.5 1.51-18.1-.4-.51-.37-.69-.74-.65-2.03.08-3.17 1.93-11.55 8.19-18.09a27 27 0 0 1 12.8-7.46c-6.16-.97-19.02-1.42-29.64 12.65-4.5 5.97-6.48 11.79-6.73 12.18-.2.3-.46.26-.86.27-4.03.17-9.15.6-10.78 1.33-1.89.84-7.8 4.4-12.34 8.11 3.2-.72 9.07-1.5 16.03.32 2.26.59 3.62 1.19 3.92 1.33"
                fill="url(#b)"
              />
              <path
                d="M6.27 43.64a1 1 0 0 0-.7-1.11l-4.86-1.5a1 1 0 0 1-.67-1.25l3.38-11.3a1 1 0 0 1 1.26-.68L10 29.44a1 1 0 0 0 1.18-.48q1.32-2.4 2.9-4.62a1 1 0 0 0-.1-1.3l-4.13-4.17a1 1 0 0 1 0-1.41c1.76-1.8 6.4-6.55 8.2-8.37a1 1 0 0 1 1.42 0l4.32 4.35a1 1 0 0 0 1.28.12 44 44 0 0 1 3.9-2.4 1 1 0 0 0 .49-1.14l-1.52-5.68a1 1 0 0 1 .7-1.22L39.88.04a1 1 0 0 1 1.23.7l1.28 4.8a1 1 0 0 0 1.12.74c2.2-.32 4.14-.43 5.3-.47a1 1 0 0 1 1.02 1v7.15a1 1 0 0 1-.97 1c-18.7.68-34.19 16.48-34.43 34.87a1 1 0 0 1-1 1H6.79a1 1 0 0 1-1-1.02q.03-3.14.48-6.17m51.18 50.38c-2.75.46-5.22.58-6.59.6a1 1 0 0 1-1.02-1v-7.47c0-.37.3-.66.66-.67 18.75-.24 34.35-15.6 35.22-33.63a1 1 0 0 1 1-.97h6.63a1 1 0 0 1 1 1.04q-.08 2.33-.4 4.58a1 1 0 0 0 .7 1.1l4.64 1.44a1 1 0 0 1 .67 1.25l-3.4 11.3a1 1 0 0 1-1.25.67l-5-1.54a1 1 0 0 0-1.19.49 45 45 0 0 1-2.97 4.78 1 1 0 0 0 .1 1.3l3.86 3.9a1 1 0 0 1 0 1.41l-8.2 8.36a1 1 0 0 1-1.43 0l-4-4.04a1 1 0 0 0-1.29-.12q-1.96 1.36-4.08 2.51a1 1 0 0 0-.5 1.14l1.4 5.24a1 1 0 0 1-.72 1.23L60.1 100a1 1 0 0 1-1.24-.72z"
                fill="url(#c)"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="23.66"
                  y1="19.86"
                  x2="76.48"
                  y2="77.35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF875C" />
                  <stop offset="0" stopColor="#FE875E" />
                  <stop offset=".48" stopColor="#BF9ACA" />
                  <stop offset="1" stopColor="#96C5B0" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="23.66"
                  y1="19.86"
                  x2="76.48"
                  y2="77.35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF875C" />
                  <stop offset="0" stopColor="#FE875E" />
                  <stop offset=".48" stopColor="#BF9ACA" />
                  <stop offset="1" stopColor="#96C5B0" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="10.5"
                  y1="4.5"
                  x2="90"
                  y2="91"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF875C" />
                  <stop offset="0" stopColor="#FE875E" />
                  <stop offset=".48" stopColor="#BF9ACA" />
                  <stop offset="1" stopColor="#96C5B0" />
                </linearGradient>
              </defs>
            </svg>
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
