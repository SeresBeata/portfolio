//style
import './App.css';
//MUI
import { Box, ThemeProvider, createTheme } from '@mui/material';
//child component
import Navbar from './components/Navbar';

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
          Home
        </Box>
        <Box className="main-sections">Parallax</Box>
        <Box id="about" className="main-sections">
          About
        </Box>
        <Box id="portfolio" className="main-sections">
          Portfolio
        </Box>
        <Box id="contact" className="main-sections">
          Contact
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
