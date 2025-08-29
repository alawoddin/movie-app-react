import { Movie } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';
// import { BrowserRouter,Routers, Route } from 'react-router-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Actors from './components/Actors/Actors';


const App = () => {
    return (
         <div>
            {/* <h1>Home Page </h1> */}
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Movies/>} /> 
                    <Route path='/actors/:id' element={<Actors/>} /> 
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default App