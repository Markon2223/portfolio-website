import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Staggered animation for form elements
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Valid email is required';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      // Display a loading message
      setSnackbar({
        open: true,
        message: 'Sending your message...',
        severity: 'info',
      });
      
      // Send to Netlify function
      const response = await axios.post('/.netlify/functions/contact', formData);
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success',
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Provide a more descriptive error message based on the error response
      const errorMessage = error.response?.data?.details || 
                          error.response?.data?.error || 
                          'Failed to send message. Please try again.';
      
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
      
      console.error('Contact form error:', error);
    }

    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
          fontSize: '400px',
          opacity: 0.02,
          fontFamily: '"Fira Code", monospace',
          color: 'primary.main',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&::before': {
                content: '"<"',
                color: 'primary.main',
                mr: 1,
                fontFamily: '"Fira Code", monospace',
              },
              '&::after': {
                content: '"/>"',
                color: 'primary.main',
                ml: 1,
                fontFamily: '"Fira Code", monospace',
              },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Have a question or want to work together? 
          </Typography>
        </motion.div>

        {/* Floating decoration elements */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: (theme) => `radial-gradient(circle, ${theme.palette.primary.main}, transparent)`,
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />
        
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: (theme) => `radial-gradient(circle, ${theme.palette.secondary.main}, transparent)`,
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />

        <motion.form
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          onSubmit={handleSubmit}
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <motion.div variants={slideUp}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderWidth: '2px',
                        borderColor: 'divider',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderWidth: '2px',
                        borderColor: 'primary.main',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      '&.Mui-focused': {
                        color: 'primary.main',
                      },
                    },
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <motion.div variants={slideUp}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={slideUp}>
                <TextField
                  required
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={!!formErrors.subject}
                  helperText={formErrors.subject}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={slideUp}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!formErrors.message}
                  helperText={formErrors.message}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={slideUp}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: (theme) => theme.palette.primary.contrastText,
                    height: '3.5rem',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      background: (theme) =>
                        `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      transform: 'translateY(-2px)',
                      boxShadow: (theme) => theme.customShadows?.medium || '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                    '&:disabled': {
                      background: 'action.disabledBackground',
                      color: 'action.disabled',
                    },
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </motion.form>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
            variant="filled"
            elevation={6}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
