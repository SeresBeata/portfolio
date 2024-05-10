import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://images.pexels.com/photos/7772559/pexels-photo-7772559.jpeg',
    imgUrl:
      'https://github.com/SeresBeata/achievement-2/blob/main/img/seresbeata.github.io_achievement-2_1200.png?raw=true',
    demoLink: 'https://seresbeata.github.io/achievement-2/',
    githubLink: 'https://github.com/SeresBeata/achievement-2',
    title: 'POKEDEX JS',
    width: '50%',
    description:
      'The aim of this project was to create a small, responsive Pokédex web application, that loads data from an external public Pokémon API and enables the viewing of data points of Pokémon in detail. The project itself was built with HTML, CSS and JavaScript.',
  },
  {
    url: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imgUrl:
      'https://github.com/SeresBeata/achievement-3/blob/main/img/imgOfProject.png?raw=true',
    demoLink: '',
    githubLink: 'https://github.com/SeresBeata/achievement-3',
    title: 'MYFLIX NODE.JS',
    width: '50%',
    description:
      'The aim of this project was to build the server-side component of a “myFlix” web application. The web application provide users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.',
  },
  {
    url: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imgUrl:
      'https://github.com/SeresBeata/achievement-4/blob/main/img/myFlixPresentation_2.png?raw=true',
    demoLink: 'https://mymovie-myflix.netlify.app/',
    githubLink: 'https://github.com/SeresBeata/achievement-4',
    title: 'MYFLIX REACT',
    width: '50%',
    description:
      'The aim of this project was to build the client-side component of a “myFlix” web application. The web application provide users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.',
  },
  {
    url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imgUrl:
      'https://github.com/SeresBeata/achievement-5/blob/main/img/meet-app-screeshot.png?raw=true',
    demoLink: ' https://seresbeata.github.io/achievement-5/',
    githubLink: 'https://github.com/SeresBeata/achievement-5',
    title: 'MEET EVENT APP REACT PWA',
    width: '50%',
    description:
      'The aim of this project was to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
  },
  {
    url: 'https://images.pexels.com/photos/1970139/pexels-photo-1970139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imgUrl:
      'https://github.com/SeresBeata/portfolio/blob/master/public/img/chat-app.png?raw=true',
    demoLink: '',
    githubLink: 'https://github.com/SeresBeata/achievement-6',
    title: 'CHAT APP REACT NATIVE',
    width: '50%',
    description:
      'The aim of this project was to build a chat app for mobile devices using React Native (JavaScript framework used for mobile app development). The app provides users with a chat interface and options to share images and their location.',
  },
  {
    url: 'https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imgUrl:
      'https://github.com/SeresBeata/achievement-7/blob/master/img/img_2.png?raw=true',
    demoLink: 'https://seresbeata.github.io/achievement-7/welcome',
    githubLink: 'https://github.com/SeresBeata/achievement-7',
    title: 'MYFLIX ANGULAR',
    width: '50%',
    description:
      'The aim of this project was to build the client-side component of a “myFlix” web application by using Angular. The web application provide users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 150,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Buttons() {
  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            border: '2px solid white',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                fontWeight: 'bold',
                filter: 'drop-shadow(8px 38px 55px #000000)',
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
