import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Divider,
} from '@mui/material';

const MainPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#1a1a1a', py: 4 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 3, 
            backgroundColor: '#2d2d2d',
            border: '1px solid #4CAF50'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#4CAF50',
                fontFamily: 'Monolisa, monospace',
                textShadow: '0 0 5px rgba(76, 175, 80, 0.5)'
              }}
            >
              $ terminal_forum
            </Typography>
            <Box>
              <Button
                onClick={handleLogout}
                sx={{
                  color: '#4CAF50',
                  border: '1px solid #4CAF50',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  },
                }}
              >
                $ logout
              </Button>
            </Box>
          </Box>
          <Typography sx={{ color: '#4CAF50', fontFamily: 'Monolisa, monospace' }}>
            Welcome, {user?.username}! | Current time: {new Date().toLocaleString()}
          </Typography>
        </Paper>

        {/* About Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 3, 
            backgroundColor: '#2d2d2d',
            border: '1px solid #4CAF50'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#4CAF50',
              fontFamily: 'Monolisa, monospace',
              mb: 2
            }}
          >
            $ about
          </Typography>
          <Typography sx={{ color: '#4CAF50', fontFamily: 'Monolisa, monospace', mb: 1 }}>
            Terminal Forum is a unique platform that combines the aesthetics of a command-line interface
            with the functionality of a modern forum. Here you can:
          </Typography>
          <Box sx={{ pl: 2, color: '#4CAF50', fontFamily: 'Monolisa, monospace' }}>
            <Typography component="div" sx={{ mb: 1 }}>• Create and participate in discussions</Typography>
            <Typography component="div" sx={{ mb: 1 }}>• Share code snippets and technical knowledge</Typography>
            <Typography component="div" sx={{ mb: 1 }}>• Connect with other terminal enthusiasts</Typography>
            <Typography component="div" sx={{ mb: 1 }}>• Experience a nostalgic terminal interface</Typography>
          </Box>
        </Paper>

        {/* Commands Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 3, 
            backgroundColor: '#2d2d2d',
            border: '1px solid #4CAF50'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#4CAF50',
              fontFamily: 'Monolisa, monospace',
              mb: 2
            }}
          >
            $ help
          </Typography>
          <Typography sx={{ color: '#4CAF50', fontFamily: 'Monolisa, monospace', mb: 2 }}>
            Available commands:
          </Typography>
          <Box sx={{ 
            pl: 2, 
            color: '#4CAF50', 
            fontFamily: 'Monolisa, monospace',
            '& .MuiTypography-root': { mb: 1 }
          }}>
            <Typography>create_post  - Create a new discussion thread</Typography>
            <Typography>list_posts   - View all discussion threads</Typography>
            <Typography>search       - Search for specific topics</Typography>
            <Typography>profile      - View and edit your profile</Typography>
            <Typography>help         - Show this help message</Typography>
            <Typography>logout       - Exit the terminal forum</Typography>
          </Box>
        </Paper>

        {/* Coming Soon Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            backgroundColor: '#2d2d2d',
            border: '1px solid #4CAF50'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#4CAF50',
              fontFamily: 'Monolisa, monospace',
              mb: 2
            }}
          >
            $ coming_soon
          </Typography>
          <Box sx={{ color: '#4CAF50', fontFamily: 'Monolisa, monospace' }}>
            <Typography sx={{ mb: 1 }}>Features in development:</Typography>
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ mb: 1 }}>• Real-time chat system</Typography>
              <Typography sx={{ mb: 1 }}>• Code syntax highlighting</Typography>
              <Typography sx={{ mb: 1 }}>• Custom terminal themes</Typography>
              <Typography sx={{ mb: 1 }}>• Markdown support</Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default MainPage; 