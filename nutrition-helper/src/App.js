import { Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Allergens from './Allergens.js';
import Macros from './Macros';
import Home from './Home';
import Scanner from './Scanner';


const App = () => {
 return (
   <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/allergens" element={<Allergens />} />
        <Route path="/macros" element={<Macros />} />
      </Routes>
   </>
 );
};

export default App;