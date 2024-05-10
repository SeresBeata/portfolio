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
          As a former physiotherapist, my main goal was to find a creative, but
          at the same time not physically demanding profession that I can
          practice with great passion in the long term.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          I have found this profession in the form of web development.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          I am sure that my experience as a physiotherapist will prove to be
          useful in this field as well, such as good communication skills,
          flexibility, problem-solving thinking, creativity and so on.
        </Typography>
        <div className="btn-container">
          <a
            href="https://raw.githubusercontent.com/SeresBeata/portfolio/master/public/img/cv.png"
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
