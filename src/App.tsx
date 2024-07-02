import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/layouts/home/Index";
import { ROUTES } from "./constants/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Privacynotice from "./components/layouts/Privacy/Privacynotice";
import Termsconditions from "./components/layouts/TermsConditions/Termsconditions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.home} element={<Index />} />
          <Route path={ROUTES.Privacynotice} element={<Privacynotice />} />
          <Route path={ROUTES.Termsconditions} element={<Termsconditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
