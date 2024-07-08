import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import './Portfolio.css';

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

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  bgcolor: 'transparent',
  color: 'text.primary',
  border: 'none',
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Buttons({ lang }) {
  const images = [
    {
      url: 'https://images.pexels.com/photos/7772559/pexels-photo-7772559.jpeg',
      imgUrl: 'card-img-pokedex',
      demoLink: 'https://seresbeata.github.io/achievement-2/',
      githubLink: 'https://github.com/SeresBeata/achievement-2',
      title: 'POKEDEX JS',
      width: '50%',
      description: lang.portfolio_pokedex,
    },
    {
      url: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imgUrl: 'card-img-api',
      demoLink: '',
      githubLink: 'https://github.com/SeresBeata/achievement-3',
      title: 'MYFLIX NODE.JS',
      width: '50%',
      description: lang.portfolio_myFlix_api,
    },
    {
      url: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imgUrl: 'card-img-react',
      demoLink: 'https://mymovie-myflix.netlify.app/',
      githubLink: 'https://github.com/SeresBeata/achievement-4',
      title: 'MYFLIX REACT',
      width: '50%',
      description: lang.portfolio_myFlix_react,
    },
    {
      url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imgUrl: 'card-img-meet-app',
      demoLink: ' https://seresbeata.github.io/achievement-5/',
      githubLink: 'https://github.com/SeresBeata/achievement-5',
      title: 'MEET EVENT APP REACT PWA',
      width: '50%',
      description: lang.portfolio_meet_app,
    },
    {
      url: 'https://images.pexels.com/photos/1970139/pexels-photo-1970139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imgUrl: 'card-img-chat-app',
      demoLink: '',
      githubLink: 'https://github.com/SeresBeata/achievement-6',
      title: 'CHAT APP REACT NATIVE',
      width: '50%',
      description: lang.portfolio_chat_app,
    },
    {
      url: 'https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imgUrl: 'card-img-angular',
      demoLink: 'https://seresbeata.github.io/achievement-7/welcome',
      githubLink: 'https://github.com/SeresBeata/achievement-7',
      title: 'MYFLIX ANGULAR',
      width: '50%',
      description: lang.portfolio_myFlix_angular,
    },
  ];

  //handle modal open/close
  const [openModal, setOpenModal] = useState(false);

  //handle modal data
  const [projectDetails, setProjectDetails] = useState({
    modalTitle: '',
    modalImg: '',
    modalUrl: '',
    modalDescription: '',
    modalDemo: '',
    modalCode: '',
  });

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
          onClick={() => {
            setProjectDetails((prevState) => ({
              ...prevState,
              modalTitle: image.title,
              modalImg: image.imgUrl,
              modalDescription: image.description,
              modalCode: image.githubLink,
              modalDemo: image.demoLink,
            }));
            setOpenModal(true);
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
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Card sx={{ padding: '10px', maxWidth: '800px' }}>
            <CardHeader
              title={projectDetails.modalTitle}
              subheader="Beáta Molnár"
            />
            <CardMedia
              component="div"
              alt={projectDetails.modalTitle}
              sx={{ height: { md: '350px', xs: '180px' } }}
              className={projectDetails.modalImg}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {projectDetails.modalDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={projectDetails.modalCode}
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="secondary">
                  {lang.portfolio_section_button_first}
                </Button>
              </a>

              {projectDetails.modalDemo === '' ? (
                ''
              ) : (
                <a
                  href={projectDetails.modalDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small" color="secondary">
                    {lang.portfolio_section_button_second}
                  </Button>
                </a>
              )}

              <Button
                size="small"
                color="error"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                {lang.portfolio_section_button_third}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </Box>
  );
}
