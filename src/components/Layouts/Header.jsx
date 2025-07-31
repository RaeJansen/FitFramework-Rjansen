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
      <div className="profile">
        <NavigationLink to="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path d="M12.5 12.5a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5m4.17-6.25a4.17 4.17 0 1 1-8.34 0 4.17 4.17 0 0 1 8.34 0M25 22.92C25 25 22.92 25 22.92 25H2.08S0 25 0 22.92s2.08-8.34 12.5-8.34S25 20.83 25 22.92m-2.08-.01c0-.51-.32-2.06-1.74-3.47-1.36-1.36-3.91-2.77-8.68-2.77s-7.32 1.41-8.68 2.77a5.6 5.6 0 0 0-1.74 3.47z" />
          </svg>
          <p>Profile</p>
        </NavigationLink>
      </div>
    </div>
  );
}
