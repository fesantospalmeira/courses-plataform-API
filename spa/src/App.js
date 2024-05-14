import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto Full-Stack em produção.
        </p>
        <p>
        Volte mais tarde
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/feli-palmeira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
