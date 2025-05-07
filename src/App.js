import './App.css';
import Header from './Header'; 
import About from './About';   
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import Counter from './Counter';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Link to="home">Home</Link>|
        <Link to="about">About</Link>|
        <Link to="contact">Contact</Link>|
        <Link to="gallery">Gallery</Link>|
        <Link to="counter">Counter</Link>
        <Routes>
          <Route element={<Home/>} path="/home"></Route>|
          <Route element={<About/>} path="/about"></Route>|
          <Route element={<Contact/>} path="/contact"></Route>|
          <Route element={<Gallery/>} path="/gallery"></Route>
          <Route element={<Counter/>} path="/counter"></Route>
          <Route element={<h1>404 Page Not Found</h1>} path="*"></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;