import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import PlanetsCard from './components/PlanetsCards/PlanetsCards';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/' element={<PlanetsCard />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;