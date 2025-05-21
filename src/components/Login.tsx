import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
} from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{
              fontFamily: 'Monolisa, monospace',
              color: '#00ff00',
              textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
            }}
          >
            $ login
          </Typography>
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 2,
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                color: '#ff0000',
                border: '1px solid #ff0000',
                '& .MuiAlert-icon': {
                  color: '#ff0000',
                },
              }}
            >
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#00ff00',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00ff00',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00ff00',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00ff00',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#00ff00',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00ff00',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00ff00',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00ff00',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3,
                backgroundColor: 'transparent',
                color: '#00ff00',
                border: '1px solid #00ff00',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                },
              }}
            >
              $ submit
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => navigate('/signup')}
              sx={{ 
                mt: 1,
                color: '#00ff00',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                },
              }}
            >
              $ new user? signup
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 