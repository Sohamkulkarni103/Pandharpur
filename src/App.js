
import './App.css';
import Home from './Components/Home';

import { Fragment } from "react";

import About from './routes/About';
import Vitthal from './routes/Vitthal';
import Life from './routes/Life';
import { Route, Routes } from "react-router-dom";
import Education from './routes/Education';
import Food from './routes/Food';
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vitthal" element={<Vitthal />} />
        <Route path="/life" element={<Life />} />
        <Route path="/education" element={<Education />} />
        <Route path="/food" element={<Food />} />
      </Routes>
      
    </div>
  );
}

export default App;



		
	
