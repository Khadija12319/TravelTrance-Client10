import { useLoaderData } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { MdFlightTakeoff } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const SpotDetails = () => {
    const spot= useLoaderData();
    console.log(spot);
    return (
        <div className="mb-16">
            <div>
                <div className="mb-10">
                    <img src={spot.photo} alt="" className="md:h-[720px] w-full"/>
                </div>
                <div className="container mx-auto">
                    <div>
                        <h1 className="text-4xl font-montserrat font-bold pb-3">Discover {spot.spotname}</h1>
                        <p className="text-orange-600 font-playfair text-3xl font-extrabold pb-3">${spot.cost} / per person</p>
                    </div>
                    <div>
                        <p className="text-base text-gray-500 pb-8">{spot.description}</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="md:col-span-2">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-4">
                                    <IoTimeOutline className="text-2xl text-orange-600"/>
                                    <p className="text-lg">{spot.time} days</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdFlightTakeoff className="text-2xl text-orange-600" />
                                    <p className="text-lg">{spot.spotname}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdOutlineCalendarMonth className="text-2xl text-orange-600" />
                                    <p className="text-lg">Available Anytime</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <IoMdPerson className="text-2xl text-orange-600"/>
                                    <p className="text-lg">Min Age: 13+</p>
                                </div>
                            </div>
                            <div className="w-[100%] mt-8">
                                <table className="w-[100%] bg-white border-collapse">
                                    <tbody className="w-[100%]">
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Destination</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">{spot.spotname}</td>
                                        </tr>
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 px-auto border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Location</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">{spot.location}</td>
                                        </tr>
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 px-auto border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Country</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">{spot.countryname}</td>
                                        </tr>
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 px-auto border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Best season for travel</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">{spot.season}</td>
                                        </tr>
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 px-auto border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Visitors per Year</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">{spot.visitor}</td>
                                        </tr>
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 px-auto border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Price Included</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500"/> Air fares</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hotel Accomodation</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Tour Guide</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Entrance Fees</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> All transportation in destination location</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Breakfast, lunch, and dinner</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Train tickets and Bus transportation</span>
                                                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> All Museum Tickets</span>
                                            </td>
                                        </tr>
                                        <tr className="w-[100%] justify-between hover:bg-orange-50">
                                            <td className="font-montserrat py-4 px-auto border-b-2 border-t-2 border-gray-300 text-xl text-gray-700 font-bold px-4">Price Excluded</td>
                                            <td className="font-montserrat py-4 border-b-2 border-t-2 border-gray-300 text-lg text-gray-700">
                                                <span className="flex items-center gap-2"><RxCross2 className="text-red-500"/>Guide Service Fee</span>
                                                <span className="flex items-center gap-2"><RxCross2 className="text-red-500" /> Driver Service Fee</span>
                                                <span className="flex items-center gap-2"><RxCross2 className="text-red-500" /> Any Private Expenses</span>
                                                <span className="flex items-center gap-2"><RxCross2 className="text-red-500" /> Room Service Fees</span>
                                                <span className="flex items-center gap-2"><RxCross2 className="text-red-500" /> Tips</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        {/* form */}
                        <div className="">
                            <div className="p-6 border bg-orange-50">
                                <h1 className="text-center text-3xl font-playfair pb-4 font-semibold">Book this tour</h1>
                                <form className="space-y-4">
                                    <input type="text" value="Name" className="px-4 py-3 border rounded-lg w-full"/>
                                    <input type="text" value="Email" className="px-4 py-3 border rounded-lg w-full"/>
                                    <input type="text" value="Confirm Email" className="px-4 py-3 rounded-lg border w-full"/>
                                    <input type="text" value="Phone" className="px-4 py-3 border rounded-lg w-full"/>
                                    <input type="date" value="dd-mm-yy" className="px-4 py-3 border rounded-lg w-full"/>
                                    <input type="text" value="Number of tickets" className="px-4 py-3 rounded-lg border w-full"/>
                                    <textarea name="message" value="Message" id="" cols="30" rows="8" className="px-4 rounded-lg py-3 border w-full"/>
                                    <button className="text-white bg-orange-600 w-full py-3 rounded-md font-montserrat font-semibold">AVAILABILITY</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;