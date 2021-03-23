/*
 * @Author: Dad
 * @Date: 2021-03-23 16:53:43
 * @LastEditTime: 2021-03-23 17:11:26
 * @LastEditors: Dad
 * @Description: 
 */
import logo from "./assets/logo.svg";
import "./App.css";

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
      </header>
    </div>
  );
}

export default App;
