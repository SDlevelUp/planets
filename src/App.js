import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar/Navbar';
import FlippableCard from './FlippableCard';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gallery' element={<FlippableCard />} />

                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;