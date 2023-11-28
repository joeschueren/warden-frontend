import React from "react";
import Landing from "../Landing/Landing";
import Overview from "../Overview/Overview";
import Booking from "../Booking/Booking";
import Desc from "../Desc/Desc";
import Footer from "../Footer/Footer";


const Home: React.FC = () => {
    return(<div>
        <Landing/>
        <Overview/>
        <Booking/>
        <Desc/>
        <Footer/>
    </div>)
}

export default Home;