import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'; 
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
     <Navigation/>
    <Routes>
    <Route path="/reactproject1" element={<Home/>}/>
    <Route path="/reactproject1/about" element={<About/>}/>
    <Route path="/reactproject1/contact" element={<Contact/>}/>
  </Routes>

    </div>
  );
}

export default App;
