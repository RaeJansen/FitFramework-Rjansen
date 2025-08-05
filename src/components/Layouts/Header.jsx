import "../../styles/header.scss";
import NavigationLink from "../UI/NavigationLink";
import { useLocation } from "react-router-dom";
import BackBtn from "../UI/Buttons/BackBtn";

export default function Header() {
  const location = useLocation();
  let pageTitle = "";

  //switch case to update the header title depending on the page
  switch (location.pathname) {
    case "/":
      pageTitle = "FitFramework";
      break;
    case "/profile":
      pageTitle = "Profile";
      break;
    case "/nutrition":
      pageTitle = "Nutrition";
      break;
    case "/exercise":
      pageTitle = "Exercise";
      break;
    case "/exercise/search":
      pageTitle = "Search";
      break;
    case "/nutrition/log-food":
      pageTitle = "Log Food";
      break;
    case "/nutrition/create-a-food":
      pageTitle = "Create A Food";
      break;
    case "/exercise/category":
      pageTitle = "Category";
      break;
    case "/profile/settings":
      pageTitle = "Settings";
    default:
      pageTitle = "FitFramework";
      break;
  }

  return (
    <div className="inside-container">
      <BackBtn />

      {/* Current Page Title */}
      <h1 className="profile-heading">{pageTitle}</h1>

      {/* Profile Link */}
      <div>
        <NavigationLink to="/profile" navElement="profile">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
          >
            <path d="M14.531 14.546a7.26 7.26 0 0 0 5.138-2.13 7.276 7.276 0 0 0 0-10.286 7.26 7.26 0 0 0-10.275 0 7.276 7.276 0 0 0 0 10.285 7.26 7.26 0 0 0 5.137 2.13m4.844-7.273a4.85 4.85 0 0 1-1.419 3.428 4.841 4.841 0 0 1-8.268-3.428 4.841 4.841 0 1 1 9.688 0m9.688 19.394c0 2.424-2.422 2.424-2.422 2.424H2.42S0 29.09 0 26.667s2.422-9.697 14.531-9.697 14.532 7.272 14.532 9.697m-2.422-.01c-.003-.596-.373-2.39-2.015-4.034-1.58-1.58-4.551-3.23-10.095-3.23-5.546 0-8.515 1.65-10.094 3.23-1.642 1.644-2.01 3.438-2.015 4.034z" />
          </svg>
          <p>Profile</p>
        </NavigationLink>
      </div>
    </div>
  );
}
