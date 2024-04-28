import Banner from "../Homecomponents/Banner";
import BelowBanner from "../Homecomponents/BelowBanner";
import CountryList from "../Homecomponents/CountryList";
import Spots from "../Spots/Spots";

const Home = () => {
    
    return (
        <div>
            <Banner />
            <CountryList />
            <BelowBanner />
            <Spots></Spots>
        </div>
    );
};

export default Home;