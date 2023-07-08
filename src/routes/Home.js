import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
// import Footer from "../components/Footer/Footer";
import FlippableCard from "../FlippableCard";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <FlippableCard />
            {/* <Footer /> */}
        </div>
    )
}
export default Home;