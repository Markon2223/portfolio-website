import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  alpha,
  Tooltip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Close as CloseIcon,
  Home as HomeIcon,
  Person as AboutIcon,
  Code as SkillsIcon,
  Work as ProjectsIcon,
  Timeline as ExperienceIcon,
  Mail as ContactIcon,
  Terminal as TerminalIcon,
} from '@mui/icons-material';

const navItems = [
  { name: 'Home', icon: HomeIcon },
  { name: 'About', icon: AboutIcon },
  { name: 'Skills', icon: SkillsIcon },
  { name: 'Projects', icon: ProjectsIcon },
  { name: 'Experience', icon: ExperienceIcon },
  { name: 'Contact', icon: ContactIcon },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%',
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${
            theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)'
          } 100%)`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TerminalIcon color="primary" sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Fira Code", monospace',
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ~/portfolio
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ p: 2 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              sx={{
                mb: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <ListItemIcon>
                <Icon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ '& .MuiTypography-root': { fontFamily: '"Fira Code", monospace' } }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component={motion.div}
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background: (theme) =>
            scrolled
              ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${
                  theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)'
                } 100%)`
              : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('home')}
          >
            <TerminalIcon
              color="primary"
              sx={{
                mr: 1,
                fontSize: '1.8rem',
              }}
            />
            <Typography
              variant="h6"
              component={motion.div}
              sx={{
                fontFamily: '"Fira Code", monospace',
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ~/portfolio
            </Typography>
          </Box>

          <Tooltip title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                mr: 2,
                '&:hover': {
                  transform: 'rotate(180deg)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              {darkMode ? <Brightness7 color="primary" /> : <Brightness4 color="primary" />}
            </IconButton>
          </Tooltip>

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <AnimatePresence>
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Tooltip title={item.name}>
                        <Button
                          onClick={() => scrollToSection(item.name)}
                          sx={{
                            minWidth: 'auto',
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            color: 'text.primary',
                            '&:hover': {
                              backgroundColor: (theme) =>
                                alpha(theme.palette.primary.main, 0.1),
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.2s ease-in-out',
                          }}
                        >
                          <Icon
                            sx={{
                              mr: 0.5,
                              fontSize: '1.2rem',
                              color: 'primary.main',
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: '"Fira Code", monospace',
                              fontSize: '0.9rem',
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Button>
                      </Tooltip>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar /> {/* Spacer */}
    </>
  );
};

export default Navbar;
