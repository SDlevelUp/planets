import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar/Navbar';
import FlippableCard from './FlippableCard';
import Footer from './components/Footer/Footer';
import Astronomy from './components/Astronomy/Astronomy';
import Contact from './components/Contact/Contact';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/galerie' element={<FlippableCard />} />
                <Route path='/astronomie' element={<Astronomy />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;