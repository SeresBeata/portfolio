import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  ButtonGroup,
} from '@mui/material';
import PortraitIcon from '@mui/icons-material/Portrait';
import './About.css';

const About = ({ lang }) => {
  return (
    <div className="about-container">
      <img src={process.env.REACT_APP_IMG} />
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
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="Basic button group"
          >
            <a
              href={process.env.REACT_APP_CV_EN}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                sx={{ marginTop: '10px' }}
                variant="contained"
                color="secondary"
                endIcon={<PortraitIcon />}
              >
                CV-EN
              </Button>
            </a>
            <a
              href={process.env.REACT_APP_CV_DE}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                sx={{ marginTop: '10px' }}
                variant="contained"
                color="secondary"
                endIcon={<PortraitIcon />}
              >
                CV-DE
              </Button>
            </a>
          </ButtonGroup>
        </div>
      </Box>
    </div>
  );
};

export default About;
