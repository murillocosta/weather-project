import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Devs from './templates/Devs';
import Home from './templates/Home';
import Body from './Components/Body/Body';

import './App.css';

const App = () => {
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
