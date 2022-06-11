import logo from "./logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid " alt="logo" />
      </header>
      <Dictionary />
      <footer className="App-footer text-center mt-3">
        Coded by Favour Umoru
      </footer>
    </div>
  );
}
