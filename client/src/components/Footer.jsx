import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Telegram,
} from '@mui/icons-material';

const socialLinks = [
  { icon: GitHub, url: 'https://github.com/Markon2223', label: 'GitHub' },
  { icon: LinkedIn, url: 'https://www.linkedin.com/in/markos-assefa-3263b2289', label: 'LinkedIn' },
  { icon: Telegram, url: 'https://t.me/Marko2223', label: 'Telegram' },
  { icon: Email, url: 'mailto:markosassefa22@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        position: 'relative',
        backgroundColor: 'background.paper',
        backgroundImage: (theme) =>
          `linear-gradient(to bottom, ${
            theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0)' : 'rgba(255, 255, 255, 0)'
          } 0%, ${
            theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          } 100%)`,
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid',
        borderColor: 'divider',
        '&::before': {
          content: '"</body>"',
          position: 'absolute',
          top: '1rem',
          left: '2rem',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.875rem',
          color: 'text.disabled',
          opacity: 0.5,
        },
        '&::after': {
          content: '"</html>"',
          position: 'absolute',
          bottom: '1rem',
          right: '2rem',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.875rem',
          color: 'text.disabled',
          opacity: 0.5,
        },
      }}
    >
      <Container maxWidth="sm">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mb={2}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <IconButton
                key={index}
                color="primary"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(100, 255, 218, 0.05)'
                      : 'rgba(0, 188, 212, 0.05)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.1)',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(100, 255, 218, 0.1)'
                        : 'rgba(0, 188, 212, 0.1)',
                  },
                }}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            fontFamily: '"Fira Code", monospace',
            mt: 2,
            opacity: 0.8,
            '&:hover': {
              color: 'primary.main',
              opacity: 1,
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          © {new Date().getFullYear()} Markos Assefa. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
