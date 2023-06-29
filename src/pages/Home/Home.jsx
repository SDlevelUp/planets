
import Landing from "../../components/Landing/Landing";
import { useEffect } from "react";
function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Landing />
        </div>



    );
}

export default Home;