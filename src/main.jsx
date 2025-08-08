import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/Main.scss";
import App from "./components/App";
import Dashboard from "./components/Pages/Home/Dashboard";
import Auth from "./components/Pages/Auth/Auth";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";
import Welcome from "./components/Pages/Auth/Welcome";
import Profile from "./components/Pages/Profile/Profile";
import Goals from "./components/Pages/Profile/Goals";
import Settings from "./components/Pages/Profile/Settings";
import Nutrition from "./components/Pages/Nutrition/Nutrition";
import CreateAFood from "./components/Pages/Nutrition/CreateAFood";
import FoodItem from "./components/Pages/Nutrition/FoodItem";
import NSearchResults from "./components/Pages/Nutrition/NSearchResults";
import Exercise from "./components/Pages/Exercise/Exercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // Authentication
      {
        path: "authentication",
        element: <Auth />,
        children: [
          { path: "welcome", element: <Welcome /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      // Profile
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "goals", element: <Goals /> },
          { path: "settings", element: <Settings /> },
        ],
      },
      // Nutrition
      {
        path: "nutrition",
        element: <Nutrition />,
        children: [
          { path: "create-a-food", element: <CreateAFood /> },
          { path: "food-item", element: <FoodItem /> },
          { path: "foodname-search-results", element: <NSearchResults /> },
        ],
      },
      // Exercise
      {
        path: "exercise",
        element: <Exercise />,
      },
    ],
  },
  { path: "*", element: <h1>404 Not Found</h1> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
