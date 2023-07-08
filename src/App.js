import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import PlanetsCard from './components/PlanetsCards/PlanetsCards';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/planets' element={<PlanetsCard />} />
            </Routes>
        </>
    );
}

export default App;