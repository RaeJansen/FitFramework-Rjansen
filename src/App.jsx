import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Nutrition from "./pages/Nutrition";
import Exercise from "./pages/Exercise";
import Profile from "./pages/Profile";
import LogFood from "./pages/LogFood";
import CreateAFood from "./pages/CreateAFood";
import SearchExercise from "./pages/SearchExercise";
import { Routes, Route } from "react-router-dom";
import NutritionDash from "./pages/NutritionDash";
import ExerciseDash from "./pages/ExerciseDash";
import ExCategory from "./pages/ExCategory";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";

// TODO: Create Nav button using react-router-dom
// TODO: Link nested pages

function App() {
  return (
    <div className="outside-container">
      <header>
        <Header />
      </header>

      <main>
        <div className="inside-container">
          {/* ROUTING */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Nutrition Section */}
            <Route path="/nutrition" element={<Nutrition />}>
              <Route index element={<NutritionDash />} />{" "}
              {/* Renders at /nutrition */}
              <Route path="log-food" element={<LogFood />} />
              <Route path="create-a-food" element={<CreateAFood />} />
            </Route>
            {/* Exercise Section */}
            <Route path="/exercise" element={<Exercise />}>
              <Route index element={<ExerciseDash />} />{" "}
              <Route path="search" element={<SearchExercise />} />
              <Route path="category" element={<ExCategory />} />
            </Route>
            {/* profile (& settings) */}
            <Route path="/profile" element={<Profile />}>
              <Route index element={<UserProfile />} />{" "}
              <Route path="settings" element={<UserSettings />} />
            </Route>
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </div>
      </main>

      <footer>
        <div className="inside-container">
          <NavBar />
        </div>
      </footer>
    </div>
  );
}

export default App;
