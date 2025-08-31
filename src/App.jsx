import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Actors from './components/Actors/Actors';
import Profile from './components/Profile/Profile';
import MovieInformation from './components/MovieInformation/MoviesInformation';
import NavBar from './components/NavBar/NavBar';

const drawerWidth = 240;

const App = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh' 
    }}> 
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Box 
          component="main"
          sx={{ 
            flexGrow: 1,
            p: 3,
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            '@media (max-width: 600px)': {
              ml: 0,
              width: '100%'
            }
          }}
        >
          {/* Toolbar spacer - replaces classes.toolbar */}
          <Box sx={{ height: '64px' }} />
          
          <Routes>
            <Route path='/movie/:id' element={<MovieInformation/>}/>
            <Route path='/' element={<Movies/>} /> 
            <Route path='/actors/:id' element={<Actors/>} /> 
            <Route path='/profile/:id' element={<Profile/>} /> 
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;