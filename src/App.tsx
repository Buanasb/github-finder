import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./App.Router";
import Navbar from "./components/layout/Navbar";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <AppRouter />
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
