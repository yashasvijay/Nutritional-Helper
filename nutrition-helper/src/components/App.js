import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.js';
import Allergens from '../pages/Allergens.js';
import Macros from '../pages/Macros';
import Home from '../pages/Home';
import Scanner from '../pages/Scanner.js';
import PrivateRoutes from './PrivateRoutes.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/scanner" element={<Scanner />} />
          <Route exact path="/allergens" element={<Allergens />} />
          <Route exact path="/macros" element={<Macros />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;