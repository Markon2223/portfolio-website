import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cheberchacha from '../assets/cheberchacha.png';
import predictive from '../assets/predictive.png';
import dagu from '../assets/dagu.png';

const projects = [
  {
    title: 'Cheberchacha Music Player',
    description: 'A music player web application designed for seamless audio playback and management. Offers functionalities such as playlist creation, song search, and customizable playback options.',
    image: cheberchacha,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    githubLink: 'https://github.com/Markon2223/Cheberchacha',
    liveLink: 'https://github.com/Markon2223/Cheberchacha',
  },
  {
    title: 'Predictive Maintenance System',
    description: 'A machine learning project for predictive maintenance of industrial equipment. Uses data analysis and predictive algorithms to identify potential failures before they occur.',
    image: predictive,
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    githubLink: 'https://github.com/Markon2223/Predictive-Maintenance-for-Industrial-Equipment',
    liveLink: 'https://github.com/Markon2223/Predictive-Maintenance-for-Industrial-Equipment',
  },
  {
    title: 'Dagu Tour and Travel Management System',
    description: 'A comprehensive tour and travel management system built with the MERN stack. Features include user authentication, tour package booking, hotel reservations, vehicle selection, payment processing, real-time chat, and map integration. The system caters to multiple user roles including tourists, administrators, tour operators, guides, drivers, and hotel managers with specialized features for each.',
    image: dagu,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Socket.io', 'Google Maps API', 'Material-UI', 'Redux'],
    githubLink: 'https://github.com/Markon2223/Dagu_senior',
    liveLink: 'https://github.com/Markon2223/Dagu_senior',
  },

];

const ProjectCard = ({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid item xs={12} md={4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${
                    theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                  } 100%)`
                : theme.palette.background.paper,
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: 'divider',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: (theme) => theme.customShadows.strong,
              borderColor: 'primary.main',
              '& .MuiCardMedia-root': {
                transform: 'scale(1.02)',
              },
            },
          }}
        >
          <Box sx={{ overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography color="text.secondary" paragraph>
              {project.description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    mt: 1,
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.75rem',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(100, 255, 218, 0.1)'
                        : 'rgba(0, 188, 212, 0.1)',
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(100, 255, 218, 0.2)'
                          : 'rgba(0, 188, 212, 0.2)',
                    },
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </CardContent>
          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button
              size="small"
              startIcon={<GitHub />}
              href={project.githubLink}
              target="_blank"
              variant="outlined"
              sx={{
                mr: 1,
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              Code
            </Button>
            <Button
              size="small"
              startIcon={<Launch />}
              href={project.liveLink}
              target="_blank"
              variant="contained"
              sx={{
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </Grid>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '"{ }"',
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
          fontSize: '400px',
          opacity: 0.02,
          fontFamily: '"Fira Code", monospace',
          color: 'primary.main',
          pointerEvents: 'none',
        },
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&::after': {
                content: '"</>"',
                display: 'block',
                fontSize: '1rem',
                color: 'primary.main',
                fontFamily: '"Fira Code", monospace',
                mt: 1,
              },
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 0.2}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
