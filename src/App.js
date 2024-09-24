import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Thant Zin Tun (Frontend Developer)
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Deploy React Js Project with nginx within docker on AWS ( EC2 )
        </p>
        <a
          className="App-link"
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker
        </a>
      </header>
    </div>
  );
}

export default App;
