import './Contact.css';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        background: 'linear-gradient(180deg, #0c0c1d,  #505064)',
      }}
    >
      <div className="card-container">
        <Card sx={{ minWidth: '300px', maxWidth: '500px' }}>
          <CardContent>
            <h2 className="contact-title" style={{ textAlign: 'center' }}>
              Contact
            </h2>
            <Divider />
            <Typography
              sx={{ mb: 1.5, paddingTop: '25px' }}
              color="text.secondary"
            >
              Got your attention? Have any questions?
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Let's get this conversation started! Contact me and I'll get in
              touch as soon as I can:
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href="https://github.com/SeresBeata"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                color="secondary"
                endIcon={<GitHubIcon />}
              >
                Find me on
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/be%C3%A1ta-moln%C3%A1r-428112282/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                color="secondary"
                endIcon={<LinkedInIcon />}
              >
                Find me on
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </Box>
  );
};

export default Contact;
