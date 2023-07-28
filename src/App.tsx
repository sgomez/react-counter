import "./App.css";

import React from "react";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";
import Counter from "./components/Counter";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

// export default App;
export default React.memo(App);
