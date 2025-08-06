import Header from "./Layouts/Header";
import NavBar from "./Layouts/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="outside-container">
        <header>
          <Header />
        </header>
        <main>
          <div className="content-container">
            <Outlet />
          </div>
        </main>
        <footer>
          <div className="inside-container">
            <NavBar />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
