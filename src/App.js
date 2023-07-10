import React, { useState, useEffect} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Tariffs from "./Components/Tariffs";
import Contacts from "./Components/Contacts";
import Films from "./Components/Films";
import Rooms from "./Components/Rooms";

import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";


const App = () => {
  const hHeade = "Заголовок";
  const hBod = "Тело";
  const hFoote = "Нижний абзац";
  const hHome = "Главная";
  const hAboutUs = "О нас";
  const hTariffs = "Тарифы";
  const hContacts = "Контакты";
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
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/films" element={<Films/>} />
        </Routes>
        <Footer hFooter={hFoote}/> 
      </Router>
      
    </>
  );
};

export default App;
