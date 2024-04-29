import { useContext, useEffect, useState } from "react";
import Spot from "./Spot";
import { AuthContext } from "../Context/Context";

const Spots = () => {
    const [spots,setSpots]=useState([]);
    const {loading} =useContext(AuthContext);
    useEffect(() => {
        if (!loading) {
            fetch('http://localhost:5000/spots')
                .then(res => res.json())
                .then(data => setSpots(data));
        }
    }, [loading]);

    return (
        <div>
            <div className="container mx-auto mb-16">
                <h1 className="text-center py-5 font-playfair text-orange-600 text-6xl font-bold leading-[65px]">Popular<br/><span className="text-black text-5xl font-montserrat dark:text-gray-600"> Tourist spots</span></h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {loading ? (
                        <span className="loading loading-spinner text-center text-orange-600 mx-auto block"></span>
                    ) : (
                        spots.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                    )}
                </div>
            </div>
        </div>
    );
};

export default Spots;