import { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Custom shadows for dark/light mode
  const getCustomShadows = (isDark) => ({
    subtle: isDark
      ? '0 2px 8px rgba(0, 188, 212, 0.05), 0 1px 2px rgba(0, 188, 212, 0.1)'
      : '0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    medium: isDark
      ? '0 4px 16px rgba(0, 188, 212, 0.1), 0 2px 4px rgba(0, 188, 212, 0.15)'
      : '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.15)',
    strong: isDark
      ? '0 8px 32px rgba(0, 188, 212, 0.15), 0 4px 8px rgba(0, 188, 212, 0.2)'
      : '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2)',
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#64ffda' : '#00bcd4',
        light: darkMode ? '#9fffeb' : '#62efff',
        dark: darkMode ? '#14b8a6' : '#008ba3',
        contrastText: darkMode ? '#0a192f' : '#ffffff',
      },
      secondary: {
        main: darkMode ? '#7c4dff' : '#6b21a8',
        light: darkMode ? '#b47cff' : '#9333ea',
        dark: darkMode ? '#3f1dcb' : '#4c1d95',
        contrastText: '#ffffff',
      },
      success: {
        main: darkMode ? '#10b981' : '#059669',
        light: darkMode ? '#34d399' : '#34d399',
        dark: darkMode ? '#059669' : '#047857',
      },
      warning: {
        main: darkMode ? '#fbbf24' : '#d97706',
        light: darkMode ? '#fcd34d' : '#fbbf24',
        dark: darkMode ? '#d97706' : '#b45309',
      },
      error: {
        main: darkMode ? '#ef4444' : '#dc2626',
        light: darkMode ? '#f87171' : '#ef4444',
        dark: darkMode ? '#dc2626' : '#b91c1c',
      },
      info: {
        main: darkMode ? '#3b82f6' : '#2563eb',
        light: darkMode ? '#60a5fa' : '#3b82f6',
        dark: darkMode ? '#2563eb' : '#1d4ed8',
      },
      background: {
        default: darkMode ? '#0a192f' : '#f8f9fa',
        paper: darkMode ? '#112240' : '#ffffff',
        card: darkMode ? '#1a2c4e' : '#ffffff',
        elevated: darkMode ? '#1d3557' : '#f8fafc',
      },
      text: {
        primary: darkMode ? '#e6f1ff' : '#1e293b',
        secondary: darkMode ? '#8892b0' : '#475569',
        accent: darkMode ? '#64ffda' : '#0284c7',
      },
      divider: darkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(0, 0, 0, 0.08)',
      action: {
        active: darkMode ? '#64ffda' : '#0284c7',
        hover: darkMode ? 'rgba(100, 255, 218, 0.08)' : 'rgba(2, 132, 199, 0.08)',
        selected: darkMode ? 'rgba(100, 255, 218, 0.16)' : 'rgba(2, 132, 199, 0.16)',
        disabled: darkMode ? 'rgba(100, 255, 218, 0.3)' : 'rgba(2, 132, 199, 0.3)',
        disabledBackground: darkMode ? 'rgba(100, 255, 218, 0.04)' : 'rgba(2, 132, 199, 0.04)',
      },
    },
    typography: {
      fontFamily: '"Fira Code", "Roboto Mono", monospace',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.025em',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        letterSpacing: '-0.025em',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.025em',
        lineHeight: 1.375,
      },
      h4: {
        fontWeight: 500,
        letterSpacing: '-0.025em',
        lineHeight: 1.375,
      },
      h5: {
        fontWeight: 500,
        letterSpacing: '-0.025em',
        lineHeight: 1.375,
      },
      h6: {
        fontWeight: 500,
        letterSpacing: '-0.025em',
        lineHeight: 1.375,
      },
      subtitle1: {
        fontSize: '1.125rem',
        lineHeight: 1.5,
        letterSpacing: '-0.01em',
      },
      subtitle2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: '-0.01em',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: '0',
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        textTransform: 'none',
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: 1.5,
        letterSpacing: '0.02em',
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
      code: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },

    },
    shape: {
      borderRadius: 8,
    },
    shadows: Array(25).fill('none'),
    customShadows: getCustomShadows(darkMode),
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: theme.palette.background.default,
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.primary.main,
              borderRadius: '4px',
              '&:hover': {
                background: theme.palette.primary.dark,
              },
            },
          },
          '::selection': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }),
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 8,
            padding: '10px 20px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: (theme) => theme.customShadows.medium,
            },
          },
          contained: {
            boxShadow: (theme) => theme.customShadows.subtle,
            '&:hover': {
              boxShadow: (theme) => theme.customShadows.medium,
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              boxShadow: (theme) => theme.customShadows.medium,
            },
          },
          elevation1: {
            boxShadow: (theme) => theme.customShadows.subtle,
          },
          elevation2: {
            boxShadow: (theme) => theme.customShadows.medium,
          },
          elevation3: {
            boxShadow: (theme) => theme.customShadows.strong,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: (theme) => theme.customShadows.medium,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: (theme) => theme.palette.action.hover,
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(100, 255, 218, 0.08)'
                : 'rgba(2, 132, 199, 0.08)',
          },
          bar: {
            borderRadius: 4,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              color: (theme) => theme.palette.primary.main,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
