import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'; 
import Pagination from './Paging';
function App() {
  return (
    <div className="App">
      <Pagination/>
    {/*<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>*/}

    </div>
  );
}

export default App;
