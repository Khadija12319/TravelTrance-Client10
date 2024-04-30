import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import Country from "./Country";
import { Typewriter } from 'react-simple-typewriter'

const Countries = () => {
    const [countries,setCountries]=useState([]);
    const {loading} =useContext(AuthContext);
    useEffect(() => {
        if (!loading) {
            fetch('http://localhost:5000/country')
                .then(res => res.json())
                .then(data => setCountries(data));
        }
    }, [loading]);

    const word=['Countries','in Bangladesh','in Thailand','in Indonesia','in Malaysia','in Vietnam','in Cambodia'];
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-black text-5xl font-montserrat dark:text-gray-600 text-center font-bold">Trip Available<span className="text-orange-600 font-playfair"> <Typewriter words={word} cursor="true" loop="true"></Typewriter></span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 mb-8">
                    {loading ? (
                        <span className="loading loading-spinner text-center text-orange-600 mx-auto block"></span>
                    ) : (
                        countries.map(country => <Country key={country._id} country={country}></Country>)
                    )}
                </div>
            </div>
        </div>
    );
};

export default Countries;