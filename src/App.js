import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar/Navbar';
import FlippableCard from './FlippableCard';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gallery' element={<FlippableCard />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;