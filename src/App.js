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
      </Box>
    </ThemeProvider>
  );
};

export default App;
