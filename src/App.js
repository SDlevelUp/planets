import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar/Navbar';
import FlippableCard from './FlippableCard';
import Footer from './components/Footer/Footer';
import Astronomy from './components/Astronomy/Astronomy';
import Contact from './components/Contact/Contact';
import Quiz from './components/Quiz/Quiz';
import { menuItems } from './js/menuItems';
function App() {
    return (
        <>
            <Navbar menuItems={menuItems} />
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/galerie' element={<FlippableCard />} />
                <Route path='/astronomie' element={<Astronomy />} />
                <Route path='/astronomie/quiz' element={<Quiz />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;