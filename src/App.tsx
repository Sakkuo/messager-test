import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";



const App = () => {
    const routes = (
        <Routes>
            <Route path="/" element={<MainPage />}/>

        </Routes>
    );

    return (
        <BrowserRouter>
            <div className="App">
              {routes}
            </div>
        </BrowserRouter>
    );
};

export default App;
