import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Starships from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
 
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships /> } />
        <Route path='/starship' element={<StarshipPage /> } />
      </Routes>
    </>
  );
}

export default App;
