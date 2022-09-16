import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Devs from './templates/Devs';
import Home from './templates/Home';
import Body from './Components/Body/Body';

import './App.css';


const App = () => {
  const [cidade, setCidade] = useState('Salvador');

  // useEffect(() => {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=f9d31ae794e0381cd7779d34934d61f8&units=metric`,
  //   )
  //     .then(resp => resp.json())
  //     .then(data => console.log(data));
  // }, [cidade]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devs" element={<Devs />} />
          </Routes>
        </Body>
      </BrowserRouter>
    </>
  );
};

export default App;
