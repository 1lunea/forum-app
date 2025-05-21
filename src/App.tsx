import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
    text: {
      primary: '#4CAF50',
      secondary: '#4CAF50',
    },
  },
  typography: {
    fontFamily: 'Monolisa, monospace',
    h4: {
      fontFamily: 'Monolisa, monospace',
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Monolisa, monospace',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid #4CAF50',
          '&:hover': {
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4CAF50',
            },
            '&:hover fieldset': {
              borderColor: '#4CAF50',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4CAF50',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#4CAF50',
          },
          '& .MuiInputBase-input': {
            color: '#4CAF50',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#2d2d2d',
          border: '1px solid #4CAF50',
        },
      },
    },
  },
});

const globalStyles = {
  '@font-face': {
    fontFamily: 'Monolisa',
    src: 'url("https://fonts.cdnfonts.com/css/monolisa")',
  },
  body: {
    backgroundColor: '#1a1a1a',
    '&::before': {
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(76, 175, 80, 0.03) 1px, transparent 1px)',
      backgroundSize: '100% 2px',
      pointerEvents: 'none',
      zIndex: 1,
    },
  },
};

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
