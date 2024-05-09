//style
import './App.css';
//MUI
import { Box, ThemeProvider, createTheme } from '@mui/material';
//child component
import Navbar from './components/Navbar';
import Parallax from './components/Parallax';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Box id="home" className="main-sections">
          <Parallax type="homeparallax" />
        </Box>
        <Box id="about" className="main-sections">
          About
        </Box>
        <Box id="portfolio" className="main-sections">
          Portfolio
        </Box>
        <Box className="main-sections">
          <Parallax type="simpleparallax" />
        </Box>
        <Box id="contact" className="main-sections">
          Contact
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
