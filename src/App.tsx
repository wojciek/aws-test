import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './style.scss'
import { MainContainer } from './app/pages/main';
import { ContactContainer } from './app/pages/contact';
import awsExports from "./aws-exports";
import Amplify from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });

const pageType: 'Main' | 'Contact' = 'Main';

function App() {
  const [state, setState] = useState(pageType);
  return (
    <div className="App">
      <div className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <span
          onClick={() => setState("Main")}
          className={state === "Main" ? "active" : "inactive"}
        >
          Main
        </span>{" "}
        <span
          onClick={() => setState("Contact")}
          className={state === "Contact" ? "active" : "inactive"}
        >
          Contact
        </span>
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
    </div>
  );
}

export default App;
