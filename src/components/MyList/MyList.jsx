import { useLoaderData } from "react-router-dom";
import Table from "./Table";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";

const MyList = () => {
    const {user} = useContext(AuthContext);
    const spots = useLoaderData();
    const filteredSpots = spots.filter(spot => spot.uemail === user.email);
    console.log(filteredSpots);
    return (
        <div className="container mx-auto">
            <h1 className="font-montserrat font-semibold text-5xl text-center my-4">My Tourist Spots</h1>
            <div className="mx-10 mb-12">
                <table className="w-[100%] bg-white border-collapse">
                    <thead>
                        <tr>
                            <th className="font-montserrat py-3 border-b-2 border-gray-300 text-base font-extrabold text-gray-700 text-center">Spot Name</th>
                            <th className="font-montserrat py-3 border-b-2 border-gray-300 text-base font-extrabold text-gray-700 text-center">Seasonality</th>
                            <th className="font-montserrat py-3 border-b-2 border-gray-300 text-base font-extrabold text-gray-700 text-center">Average Cost</th>
                            <th className="font-montserrat py-3 border-b-2 border-gray-300 text-base font-extrabold text-gray-700 text-center">Travel Time</th>
                            <th className="font-montserrat py-3 border-b-2 border-gray-300 text-base font-extrabold text-gray-700 text-center">Visitor/Y</th>
                            <th className="font-montserrat py-3 border-b-2 border-gray-300 text-base font-extrabold text-gray-700 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSpots.map(spot => <Table spot={spot} key={spot._id} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
