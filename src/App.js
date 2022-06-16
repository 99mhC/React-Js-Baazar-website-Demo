// import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Footer from './components/Footer';
// import SignUp from './SignUp'
import Home from './Home';
import Man from './components/Man'
import Women from './components/Women'
import Goggle from './components/Goggle'
import Kids from './components/Kids';
import Login from './components/Login'
import Skincare from './components/Skincare';
import Pents from './components/Pents'
import Fragrance from './components/Fragrance';
import Shoes from './components/Shoes';
import Neckles from './components/Neckles';
import Mecup from './components/Mecup';
import Girlstop from './components/Girlstop';
import Bra from './components/Bra';
import Furniture from './components/Furniture';

function App() {
  return (
    <div>
 
   
    <BrowserRouter>
    <Nav />
    

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/man" element={<Man/>} />
    <Route path="/women" element={<Women />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/mobile" element={<h1>Mobile component</h1>} />
    {/* <Route path="/signup" element={<SignUp /> } /> */}
    <Route path="/misc" element={<h1>misc</h1>} />
    <Route path="/goggle" element={<Goggle/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/skincare" element={<Skincare />} />
    <Route path="/pents" element={<Pents/>} />
    <Route path="/fragrance" element={<Fragrance />} />
    <Route path="/shoes" element={<Shoes />} />
    <Route path="/neckles" element={<Neckles />} />
    <Route path="/mecup" element={<Mecup />} />
    <Route path="/girlstop" element={<Girlstop />} />
    <Route path="/bra" element={<Bra />} />
    <Route path="/furniture" element={<Furniture />} />

    </Routes>

   
    </BrowserRouter>
    
    {/* <Footer /> */}
    
    
    </div>
  );
}

export default App;
