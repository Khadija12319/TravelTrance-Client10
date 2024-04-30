import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Spot from "../Spots/Spot";

const CountryInfo = () => {
        const {country} =useParams();
        const {loading}=useContext(AuthContext);
        const countries=useLoaderData();
        const [countryName, setCountryName]=useState([]);
        const [spots, setSpots] = useState([]);

        const matchingCountry = countries.filter(item => item.country === country);
        useEffect(() => {
            if (matchingCountry.length > 0) {
                setCountryName(matchingCountry[0]);
            }
        }, [matchingCountry]);

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("https://assignment-10-server-wheat-seven.vercel.app/spots");
                const data = await response.json();
                const filteredSpots = data.filter(spot => spot.countryname === country);
                setSpots(filteredSpots);
            };
            fetchData();
        }, [country]);

        console.log(spots)


    return (
        <div className="overflow-hidden">
            <div className="container mx-auto my-12 z-0">
                <div className="mb-10">
                    {
                        loading?(<span className="loading loading-spinner text-center text-orange-600 mx-auto block"></span>) : (<div className="flex lg:flex-row flex-col gap-12">
                        <div className="flex-1">
                            <img src={countryName.image} alt="" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold text-orange-600 my-6 font-playfair">{countryName.country}</h1>
                            <p className="text-lg font-normal leading-8 text-justify font-montserrat">{countryName.description}</p>
                        </div>
                        </div>)
                    }
                </div>
                <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {loading ? (
                        <span className="loading loading-spinner text-center text-orange-600 mx-auto block"></span>
                    ) : (
                        spots.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;