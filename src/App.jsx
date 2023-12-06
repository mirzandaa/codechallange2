import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Teams from "./pages/Teams";
import TentangKami from './pages/TentangKami';


function App() {
  return (
    <div>

      <NavbarComponent/>
      <Routes>
        <Route path="/" Component = {Homepage} />
        <Route path= "/Tentangkami" Component = {TentangKami} />
        <Route path= "/product" Component = {Product} />
        <Route path = "/teams" Component = {Teams} />
      </Routes>

      {/* <FooterComponent/> */}
    </div>
  );
}

export default App;
