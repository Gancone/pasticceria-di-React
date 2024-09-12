import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FiSun } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";
import Contattaci from './components/Contattaci';
import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import SingleSweet from './components/SingleSweet';



const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {
  //Stato iniziale per la nostra modalità
  const [theme, setTheme] = useState(getFromLocalStorage());

  //Cambia il valore dello staate theme
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    //Attacca classe al html tag
    document.documentElement.className = theme;

    //inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="body">
        <Navbar >
          {theme === "light-mode" ? (
            <IoIosMoon className='btn-mode' onClick={cambiaTema} />
          ) : (
            <FiSun className='btn-mode' onClick={cambiaTema} />
          )}
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/lista" element={<Card />} />
          <Route path="/lista/:id" element={<SingleSweet />} />
          <Route path="/contatti" element={<Contattaci />} />


          <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
