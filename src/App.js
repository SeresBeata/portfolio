//style
import './App.css';
//MUI
import { Box, ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
      </Box>
    </ThemeProvider>
  );
};

export default App;
