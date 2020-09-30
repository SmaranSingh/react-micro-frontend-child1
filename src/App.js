import React from "react";
import logo from "./logo.svg";
import "./App.scss";

const { REACT_APP_CHILD1_HOST: host } = process.env;

function App() {
  return (
    <div className='child1 App'>
      <header className='App-header'>
        <img src={`${host}${logo}`} className='App-logo' alt='logo' />
        <p>Child 1</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
