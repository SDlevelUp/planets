import Navbar from "../../Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import { useEffect } from "react";
function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <Landing />
        </div>
    );
}

export default Home;