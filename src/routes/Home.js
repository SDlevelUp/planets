import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
// import Footer from "../components/Footer/Footer";
import PlanetsCard from "../components/PlanetsCards/PlanetsCards";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <PlanetsCard />
            {/* <Footer /> */}
        </div>
    )
}

export default Home;