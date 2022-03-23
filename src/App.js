import React from 'react'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Search from './components/Search';
import Homepage from './page/Homepage';
import About from "./page/About"
import { Routes, Route} from "react-router-dom";
import Myphoto from './page/Myphoto';
import { useState,useEffect } from 'react';

const App = () => {
  const [myPhoto,setMyPhoto] = useState([]);
  console.log(myPhoto);
    return (<div>
      <Nav/>
       <Routes>
         <Route path ="/" element = {<Homepage myPhoto = {myPhoto} setMyPhoto={setMyPhoto}/>} />
         <Route path = "/about" element = {<About/>} />
         <Route path = "/myphoto" element = {<Myphoto  myPhoto = {myPhoto} setMyPhoto={setMyPhoto}/>} />
       </Routes>
      <Footer/>
    </div>
  )
}

export default App
