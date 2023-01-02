import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar></NavBar>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
