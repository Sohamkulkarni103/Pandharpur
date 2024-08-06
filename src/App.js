
import { useState } from 'react';
import './App.css';

function App() {
   const [value, setValue] = useState("");
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
