import Navbar from "../../Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <Landing />
            <Footer />

        </div>
    );
}

export default Home;