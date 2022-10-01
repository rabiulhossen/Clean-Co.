import './App.css';
import { render } from "react-dom"
import { Router } from "@reach/router"
import Navbar from './components/Shared/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Router>
    <Home path="/"/>
    <About path="/about"/>
    <Contact path="/contact"/>
    <Services path="/services"/>
    </Router>
    
    </>
  );
}

export default App;
