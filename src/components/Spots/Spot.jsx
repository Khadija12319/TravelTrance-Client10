import { FaLocationDot } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { Link } from "react-router-dom";
const Spot = ({spot}) => {
    return (
        <div className="border rounded-2xl shadow-md">
            <div>
                <div className="w-full">
                    <img src={spot.photo} alt="" className="w-full h-[300px] rounded-t-2xl"/>
                </div>
                <div className="pt-6 px-6">
                    <h1 className="mt-3 text-3xl font-playfair text-orange-600 font-extrabold">{spot.spotname}</h1>
                    <p className="py-2 text-xl font-montserrat">{spot.countryname}</p>
                    <p className="font-montserrat">Best selection for <span className="text-orange-600 font-bold">{spot.season}</span></p>
                    <div className="py-4">
                        <div className="flex items-center gap-3">
                            <FaLocationDot className="text-2xl text-gray-500"/>
                            <p className="flex flex-col text-lg font-montserrat font-semibold text-gray-600">Location <span className="text-base font-normal">{spot.location}</span></p>
                        </div>
                        <div className="flex gap-10 pt-2">
                        <div className="flex items-center gap-3">
                            <FaRegMoneyBillAlt className="text-2xl text-gray-500" />
                            <p className="flex flex-col text-lg font-montserrat font-semibold text-gray-600">Avg. Cost <span className="text-base font-normal">${spot.cost}</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdCardTravel className="text-2xl text-gray-500" />
                            <p className="flex flex-col text-lg font-montserrat font-semibold text-gray-600">Travel for <span className="text-base font-normal">{spot.time} days</span></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="items-center flex justify-center mb-6">
                    <Link to={`/spot/${spot._id}`}><button className="bg-orange-600 text-white py-3 px-4 text-xl rounded-2xl font-semibold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Spot;