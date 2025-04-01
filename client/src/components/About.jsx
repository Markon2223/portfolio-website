import { Box, Container, Typography, Grid, Avatar, Button, useTheme } from '@mui/material';
import profileImage1 from '../assets/profile1.png';
import { CloudDownload } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Enhanced animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Staggered animation for text elements
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const theme = useTheme();

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '"<About />"',
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.875rem',
          color: 'text.disabled',
          opacity: 0.5,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? `radial-gradient(circle at 50% 50%, 
                  ${theme.palette.primary.main}05 0%, 
                  transparent 50%)`
              : 'none',
          pointerEvents: 'none',
          zIndex: 1,
        },
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -3 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.7,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '500px',
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 4,
                }}
              >
                {/* Decorative elements */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.7 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  sx={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.primary.main}40, transparent 70%)`,
                    filter: 'blur(25px)',
                    top: '5%',
                    left: '-10%',
                    zIndex: 0,
                  }}
                />
                
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.5 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  sx={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.main}40, transparent 70%)`,
                    filter: 'blur(20px)',
                    bottom: '10%',
                    right: '0%',
                    zIndex: 0,
                  }}
                />
                
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: `0 15px 40px ${theme.palette.primary.main}60`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      component="img"
                      src={profileImage1}
                      alt="Markos Assefa"
                      sx={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '20px',
                        boxShadow: `0 10px 30px ${theme.palette.primary.main}40`,
                        transition: 'all 0.3s ease-in-out',
                        filter: 'brightness(1.05)',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    />
                  </motion.div>
                  
                  {/* Code-like decorative elements */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 0.8, x: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      fontFamily: '"Fira Code", monospace',
                      color: 'primary.main',
                      fontSize: '0.8rem',
                      zIndex: 3,
                      background: 'rgba(0,0,0,0.7)',
                      p: 0.7,
                      borderRadius: 1,
                    }}
                  >
                    &lt;developer&gt;
                  </Box>
                  
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 0.8, x: 0 } : {}}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    sx={{
                      position: 'absolute',
                      bottom: -15,
                      right: -15,
                      fontFamily: '"Fira Code", monospace',
                      color: 'secondary.main',
                      fontSize: '0.8rem',
                      zIndex: 3,
                      background: 'rgba(0,0,0,0.7)',
                      p: 0.7,
                      borderRadius: 1,
                    }}
                  >
                    &lt;/developer&gt;
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <motion.div variants={slideUp}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3,
                    '&::before': {
                      content: '"const "',
                      color: '#666',
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '1.5rem',
                    },
                    '&::after': {
                      content: '" = () => {"',
                      color: '#666',
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '1.5rem',
                    },
                  }}
                >
                  About Me
                </Typography>
              </motion.div>
              
              <motion.div variants={slideUp}>
                <Typography variant="body1" paragraph>
                  I'm a passionate full-stack developer with a Computer Science degree from St. Mary's University, Addis Ababa.
                  I have a drive for building innovative and scalable solutions! I've honed my skills in web development,
                  tackling real-world projects that pushed my coding expertise to new heights.
                </Typography>
              </motion.div>
              
              <motion.div variants={slideUp}>
                <Typography variant="body1" paragraph>
                  At Amon IT Solution in Addis Ababa, I collaborated with a talented team to design and develop
                  user-friendly web applications. I gained hands-on experience with technologies like HTML, CSS,
                  JavaScript, and frameworks like React. I also participated in code reviews and agile development
                  processes, which helped refine my coding practices and teamwork skills.
                </Typography>
              </motion.div>
              
              <motion.div variants={slideUp}>
                <Typography variant="body1" paragraph>
                  My technical stack includes JavaScript, React, Node.js, Python, HTML, CSS, and more. I thrive
                  on solving complex problems with clean, efficient code. I'm skilled in database technologies
                  including MongoDB and MySQL. I'm always eager to learn, adapt, and create impactful technology!
                </Typography>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: (theme) => theme.customShadows?.medium || '0 8px 16px rgba(0, 0, 0, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  startIcon={<CloudDownload />}
                  size="large"
                  sx={{
                    mt: 4,
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: (theme) => theme.palette.primary.contrastText,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      background: (theme) =>
                        `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      transform: 'translateY(-2px)',
                      boxShadow: (theme) => theme.customShadows?.medium || '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  href="/assets/resume.html"
                  download="Markos_Assefa_Resume.html"
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
