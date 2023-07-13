import React, {useState, useEffect} from "react";
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

    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/rooms" element={<Rooms/>}/>
                    <Route path="/tariffs" element={<Tariffs/>}/>
                    <Route path="/films" element={<Films/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
