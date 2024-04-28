import { useEffect, useState } from "react";
import Spot from "./Spot";

const Spots = () => {
    const [spots,setSpots]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res => res.json())
        .then(data=>setSpots(data))
    },[])
    console.log(spots);
    return (
        <div>
            <div className="container mx-auto mb-16">
                <h1 className="text-center py-5 font-playfair text-orange-600 text-6xl font-bold leading-[65px]">Popular<br/><span className="text-black text-5xl font-montserrat"> Tourist spots</span></h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        spots.map(spot=><Spot key={spot._id} spot={spot}></Spot>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Spots;