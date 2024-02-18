import React from 'react'
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";
import './App.css'
import { Home } from './Components/Home';
import { About } from './Components/About';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter >


  );
}
export default App;
