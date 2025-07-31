import Header from "./Layouts/Header";
import NavBar from "./Layouts/Navigation";

function App() {
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
