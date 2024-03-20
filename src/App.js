import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/faq' element={<FAQ></FAQ>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
       

      </Routes>
    </div>
  );
}

export default App;
