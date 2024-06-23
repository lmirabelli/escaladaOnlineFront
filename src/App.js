
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar.js'
import Cardbox from './components/cardbox/cardbox.js';
import DetailShop from './components/detailShop/detailShop.js';
import AddShop from './components/addShop/addShop.js'
import EditShop from './components/editShop/editShop.js';


function App() {

  return (
    
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/shop/:idnumber' element={<DetailShop />} />
        <Route path='/editShop/:idnumber' element={<EditShop />} />
        <Route path='/shops' element={<Cardbox />} />
        <Route path='/shops/:category' element={<Cardbox />} />
        <Route path='/addShop' element={<AddShop />} />
        <Route path='/' element={<Cardbox />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}


export default App;
