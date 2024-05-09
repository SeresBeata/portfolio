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
        <Box id="home"> Home</Box>
        <Box id="about"> About</Box>
        <Box id="portfolio"> Portfolio</Box>
        <Box id="contact"> Contact</Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
