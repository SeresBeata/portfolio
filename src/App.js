//style
import './App.css';
//MUI
import { Box, ThemeProvider, createTheme } from '@mui/material';
//child component
import Navbar from './components/Navbar';
import Parallax from './components/Parallax/Parallax';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
//react
import React from 'react';
import { useState } from 'react';
//lang
import en from './assets/en.json';
import de from './assets/de.json';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const storedLanguage = localStorage.getItem('language');
  const [lang, setLang] = useState(storedLanguage === 'de' ? de : en);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar lang={lang} setLang={setLang} />
        <Box id="home" className="main-sections">
          <Parallax type="homeparallax" />
        </Box>
        <Box id="about" className="main-sections">
          <About lang={lang} />
        </Box>
        <Box id="portfolio" className="main-sections">
          <Portfolio lang={lang} />
        </Box>
        <Box className="main-sections">
          <Parallax type="simpleparallax" />
        </Box>
        <Box id="contact" className="main-sections">
          <Contact lang={lang} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
