import { Movie } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';
// import { BrowserRouter,Routers, Route } from 'react-router-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Actors from './components/Actors/Actors';
import Profile from './components/Profile/Profile';
import MovieInformation from './components/MovieInformation/MoviesInformation';
import NavBar from './components/NavBar/NavBar';


const App = () => {
    return (
         <div>
            {/* <h1>Home Page </h1> */}
            <CssBaseline />
            <BrowserRouter>
            <NavBar/>
            <main>
                <div>
                <Routes>
                    <Route path='/movie/:id' element = {<MovieInformation/>}/>
                    <Route path='/' element={<Movies/>} /> 
                    <Route path='/actors/:id' element={<Actors/>} /> 
                    <Route path='/profile/:id' element={<Profile/>} /> 
                </Routes>
                </div>
                </main>
            </BrowserRouter>
            
        </div>
    )
}

export default App