import Banner from "../Homecomponents/Banner";
import BelowBanner from "../Homecomponents/BelowBanner";
import CountryList from "../Homecomponents/CountryList";

const Home = () => {
    return (
        <div>
            <Banner />
            <CountryList />
            <BelowBanner />
        </div>
    );
};

export default Home;