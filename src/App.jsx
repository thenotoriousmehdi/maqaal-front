import Navbar from './components/navbar'
import Footer from './components/footer'

import { Route, Routes } from "react-router-dom";

import Apropospage from "./pages/Apropspage"
 import { Home } from './pages/Home';
import Articles from "./pages/Articles"
import Faq from './pages/Faq';
import Notreequipe from './pages/Notreequipe';

import Headroom from 'react-headroom/src';
function App() {
  

  return (
   
 <>
   
     <Headroom><Navbar /> </Headroom>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={ <Apropospage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Notreequipe" element={<Notreequipe />} />
  </Routes> 

  <Footer /> 
    </>
    
      
     
    
    
  )
}

export default App
