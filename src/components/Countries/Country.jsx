import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Country = ({country}) => {
    return (
        <Link to={`/country/${country.country}`}>
            <div className="border rounded-2xl shadow-md flex flex-col h-full">
            <div>
                <div className="w-full">
                    <img src={country.image} alt="" className="w-full h-[300px] rounded-t-2xl" />
                </div>
                <div className="pt-6 px-8 flex flex-col flex-grow">
                    <h1 className="mt-3 text-4xl font-playfair text-orange-600 font-extrabold">{country.country}</h1>
                    <p className="py-4 text-xl font-montserrat flex-grow text-justify">{country.description}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

Country.propTypes = {
    country : PropTypes.object
}

export default Country;