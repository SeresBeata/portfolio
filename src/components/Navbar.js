import * as React from 'react';

//MUI
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';

const Navbar = () => {
  //handle menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                style={{ height: '50px' }}
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 64 64"
              >
                <path d="M57.96 11.65H50.6c-.87 0-1.71.24-2.45.68l-9.64 5.83-6.08-2.83c-.27-.12-.58-.12-.84 0l-6.08 2.83-9.64-5.83c-.74-.45-1.59-.68-2.45-.68H6.04c-1.13 0-2.04.92-2.04 2.04v9.58c0 .93.38 1.84 1.05 2.49.03.03.07.07.11.09l8.68 6.28-1.67 11.83c-.13 1.05.43 2.06 1.39 2.5l12.27 5.72c.51.24 1.09.23 1.59-.04.5-.26.84-.73.94-1.29l.74-4.41 1.48.96c.86.56 1.98.56 2.84 0l1.48-.96.74 4.41c.09.56.44 1.03.94 1.29a1.764 1.764 0 0 0 1.59.04l12.27-5.72c.96-.45 1.52-1.45 1.39-2.52l-1.67-11.81 8.68-6.28s.08-.06.11-.09c.67-.65 1.05-1.56 1.05-2.49v-9.58c0-1.13-.92-2.04-2.04-2.04Zm-20.85 35.9L33.1 23.77l14.67-8.87-10.65 32.65Zm-10.22 0L16.24 14.9l14.66 8.87-4.01 23.78ZM32 17.34l4.44 2.07L32 22.1l-4.44-2.69L32 17.34ZM6.4 24.28c-.26-.27-.4-.64-.4-1.01l.04-9.62h7.36c.12 0 .23.08.35.1l6.83 20.93L6.4 24.28Zm7.75 19.95 1.52-10.74 6 4.5 3.87 11.85-11.13-5.19a.433.433 0 0 1-.25-.43Zm18.17 1.51a.59.59 0 0 1-.65 0l-2.21-1.44 2.53-15.02 2.53 15.02-2.21 1.44Zm17.27-1.08-11.13 5.19L42.33 38l6-4.5 1.51 10.72c.02.19-.08.37-.25.45ZM58 23.27c0 .37-.15.74-.4 1.01l-14.19 10.4 6.83-20.93c.12-.02.23-.1.35-.1l7.41.04v9.58Z" />
              </svg>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button color="secondary">Home</Button>
              <Button color="secondary">About</Button>
              <Button color="secondary">Portfolio</Button>
              <Button color="secondary">Contact</Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Button
                color="secondary"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                MENU
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
