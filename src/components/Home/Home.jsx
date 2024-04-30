import Countries from "../Countries/Countries";
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
            <Countries></Countries>
            <Spots></Spots>
        </div>
    );
};

export default Home;