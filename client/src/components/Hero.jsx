import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { Code as CodeIcon, Email as EmailIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

// Enhanced animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

const CodeLine = ({ delay, children, type = 'left' }) => {
  const variants = type === 'left' ? slideInFromLeft : slideInFromRight;
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100 }}
      style={{ fontFamily: '"Fira Code", monospace' }}
    >
      {children}
    </motion.div>
  );
};

// Animated typing effect component
const TypedText = ({ text, delay = 0, duration = 2 }) => {
  return (
    <motion.span
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ duration, delay, ease: 'easeInOut' }}
      style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {text}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <Box
      id="home"
      component={motion.div}
      initial="initial"
      animate="animate"
      variants={fadeIn}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) => `
            linear-gradient(135deg, ${theme.palette.primary.dark}22 25%, transparent 25%) -50px 0,
            linear-gradient(225deg, ${theme.palette.primary.dark}22 25%, transparent 25%) -50px 0,
            linear-gradient(315deg, ${theme.palette.primary.dark}22 25%, transparent 25%),
            linear-gradient(45deg, ${theme.palette.primary.dark}22 25%, transparent 25%)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.1,
        },
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        sx={{
          position: 'absolute',
          right: '-5%',
          top: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle, ${theme.palette.primary.main}, transparent)`,
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        sx={{
          position: 'absolute',
          left: '10%',
          bottom: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle, ${theme.palette.secondary.main}, transparent)`,
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3} sx={{ position: 'relative' }}>
              <CodeLine delay={0.2}>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontFamily: 'inherit' }}
                >
                  <TypedText text="&gt; Hello, World! I am" delay={0.3} duration={1.5} />
                </Typography>
              </CodeLine>
              
              <CodeLine delay={0.4}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 'bold',
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <TypedText text="[Markos Assefa]" delay={1.5} duration={1.2} />
                </Typography>
              </CodeLine>
              
              <CodeLine delay={0.6} type="right">
                <Typography
                  variant="h2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                    fontFamily: 'inherit',
                  }}
                >
                  <TypedText text="&lt;FullStackWebDeveloper, ComputerScienceDegree, St.MarysUniversity /&gt;" delay={2.8} duration={2.5} />
                </Typography>
              </CodeLine>
              
              <CodeLine delay={0.8}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    maxWidth: '600px',
                    fontFamily: 'inherit',
                    mb: 3,
                  }}
                >
                  $ Computer Science graduate specializing in Full Stack Development,
                  Machine Learning, and Data Analysis. Building innovative solutions
                  that combine web technologies with data-driven insights.
                </Typography>
              </CodeLine>
          
              <Stack
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2, type: 'spring' }}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  size="large"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  startIcon={<CodeIcon />}
                  sx={{
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    '&:hover': {
                      background: (theme) =>
                        `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  variant="outlined"
                  size="large"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  startIcon={<EmailIcon />}
                  sx={{
                    borderColor: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </Stack>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', damping: 20 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Markos Assefa"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: (theme) => `0 10px 30px ${theme.palette.primary.main}40`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: (theme) => `0 15px 40px ${theme.palette.primary.main}60`,
                    filter: 'brightness(1.1)',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
