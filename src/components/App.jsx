import { useState } from "react";
import Header from "./Layouts/Header";
import NavBar from "./Layouts/NavBar";

function App() {
  // which navigation button is selected
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="outside-container">
      <header>
        <Header />
      </header>

      <main>
        <div className="inside-container"></div>
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
