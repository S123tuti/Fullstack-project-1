import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./style.css";
import CreateUsernamePage from "./CreateUsernamePage";


const App = () => {
  return (
    <BrowserRouter>

      { /* Defined different routes useing the Route component*/}
      { /* Each route has a specific path prop that corresponds to URL*/}
      { /* prop is used to specify the component to render when the URL matches the given path*/}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createUsername" element={<CreateUsernamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render the app component using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));
