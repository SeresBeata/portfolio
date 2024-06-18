import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';
import PortraitIcon from '@mui/icons-material/Portrait';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img src="https://github.com/SeresBeata/achievement-1/blob/main/img/k%C3%A9p_%C3%B6n.png?raw=true" />
      <Box>
        <h2>About</h2>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          My name is Beáta Molnár and I am a web developer. As a former
          physiotherapist, my main goal was to find a creative, but at the same
          time not physically demanding profession that I can practice with
          great passion in the long term.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          I have found this profession in the form of web development.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          My experience as a physiotherapist proves to be useful in this field
          as well, such as good communication skills, flexibility,
          problem-solving thinking, creativity and so on.
        </Typography>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/1rho6hWbEen06itH1-KS9sw2lTOz-W4yD/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              sx={{ marginTop: '10px' }}
              variant="contained"
              color="secondary"
              endIcon={<PortraitIcon />}
            >
              curriculum vitae
            </Button>
          </a>
        </div>
      </Box>
    </div>
  );
};

export default About;
