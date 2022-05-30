import React, { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import {Home} from "./components/Home"
import {Footer} from "./components/Footer"
import { Kepzesek } from "./components/Kepzesek";
import { Tanfolyamok } from "./components/Tanfolyamok";
import { ContactUs } from "./components/ContactUs";
import JsonData from "./data/data.json";
import {Register} from './components/Register'
import {Login} from './components/Login'
import './App.css'


export const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />  
       <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home  />} />
            <Route path="/kepzesek" element={<Kepzesek />} />
            <Route path="/tanfolyamok" element={<Tanfolyamok />} />
            <Route path="/contact" element={<ContactUs  data={landingPageData.Contact} />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

