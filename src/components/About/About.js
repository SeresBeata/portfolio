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

const About = ({ lang }) => {
  return (
    <div className="about-container">
      <img src="https://github.com/SeresBeata/achievement-1/blob/main/img/k%C3%A9p_%C3%B6n.png?raw=true" />
      <Box>
        <h2>{lang.about_title}</h2>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lang.about_section_first}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lang.about_section_second}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lang.about_section_third}
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
