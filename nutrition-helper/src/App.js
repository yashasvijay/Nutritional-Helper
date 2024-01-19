import { Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Allergens from './Allergens.js';
import Macros from './Macros';
import Home from './Home';
import Scanner from './Scanner';
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