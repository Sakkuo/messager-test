import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";
import UserPage from "./components/UserPage/UserPage";

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path={"/user/:id"} element={<UserPage />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
};

export default App;
