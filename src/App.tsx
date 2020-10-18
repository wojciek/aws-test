import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './style.scss'
import { MainContainer } from './app/pages/main';
import { ContactContainer } from './app/pages/contact';

const pageType: 'Main' | 'Contact' = 'Main';

function App() {
  const [state, setState] = useState(pageType);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="nav">
          <span onClick={() => setState("Main")}>Main</span>{" "}
          <span onClick={() => setState("Contact")}>Contact</span>
        </div>
        <div className="container">
          {state === "Main" && <MainContainer />}
          {state === "Contact" && <ContactContainer />}
        </div>
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
