import { useContext, useState} from "react";
import { AuthContext } from "../Context/Context";
import Spot from "../Spots/Spot";
import { useLoaderData } from "react-router-dom";

const TouristSpots = () => {
    const {loading} =useContext(AuthContext);
    const spotsData = useLoaderData();
    const [spots, setSpots] = useState(spotsData);
    const [sortOrder, setSortOrder] = useState("ascending");

    const handleSort = () => {
        const sortedSpots = [...spots].sort((a, b) => {
            if (sortOrder === "ascending") {
                return a.cost - b.cost;
            } else {
                return b.cost - a.cost;
            }
        });
        setSpots(sortedSpots);
        setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    };
    return (
        <div className="container mx-auto mb-16">
            <div className="w-full flex items-center justify-center mb-12">
                <button className="bg- bg-orange-600 text-white px-5 py-3 rounded-full text-lg font-semibold" onClick={handleSort}>{sortOrder === "ascending" ? "Sort Ascendingly" : "Sort Descendingly"}</button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {loading ? (
                        <span className="loading loading-spinner text-center text-orange-600 mx-auto block"></span>
                    ) : (
                        spots.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                    )}
                </div>
        </div>
    );
};

export default TouristSpots;