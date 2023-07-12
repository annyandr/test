import React, { useState, useEffect} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Tariffs from "./Components/Tariffs";
import Films from "./Components/Films";
import Rooms from "./Components/Rooms";

import index from './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";


const App = () => {
  const hHeade = "Заголовок";
  const hFoote = "Нижний абзац";
  const hHome = "Главная";
  const hTariffs = "Тарифы";
  const hFilms = "Фильмы";
  const hRooms = "Залы";

  return (
    <>
      <Router> 
        <Header hHeader={hHeade}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/tariffs" element={<Tariffs/>} />
          <Route path="/films" element={<Films/>} />
        </Routes>
        <Footer hFooter={hFoote}/> 
      </Router>      
    </>
  );
};

export default App;
