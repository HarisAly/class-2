import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This paragraph is being written in the header file while the below change done by me is outer side the header </p>
      </header>
      <p>
        <b>Hello World Here is the change by atif javed in react app</b>
      </p>
    </div>
  );
}

export default App;
