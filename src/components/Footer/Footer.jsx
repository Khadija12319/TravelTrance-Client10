import "../../App.css"
import { GiTripwire } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import photo from "../../assets/creditcard-logo.png"
import moment from 'moment';
const Footer = () => {
    return (
        <div className="overflow-hidden">
            <div className="footer-background1 py-10">
                <div className="container mx-auto my-10">
                    <div className="md:mx-14 mx-4 bg-white py-5 px-6">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                            <div>
                                <div className="flex flex-col items-center justify-center px-4">
                                <a className="text-3xl flex items-center font-montserrat font-bold mt-6">Trave<span><GiTripwire className="text-orange-600"/></span>Trance</a>
                                <p className="py-3 text-gray-500">Your ticket to seamless travel. Book complete packages effortlessly and journey into unforgettable adventures.</p>
                                <p className="py-5 text-xl font-montserrat font-semibold">Follow us on</p>
                                <div className="grid grid-cols-3 w-full gap-5 mb-3">
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <FaInstagram className="text-2xl"/>
                                        <p className="text-gray-400">Instagram</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <FaFacebookF className="text-2xl" />
                                        <p className="text-gray-400">FaceBook</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <FaXTwitter className="text-2xl"/>
                                        <p className="text-gray-400">Twitter</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <FaPinterestP className="text-2xl" />
                                        <p className="text-gray-400">Pinterest</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <FaYoutube className="text-2xl" />
                                        <p className="text-gray-400">Youtube</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <FaVimeoV className="text-2xl" />
                                        <p className="text-gray-400">Vimeo</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div>
                                <h1  className="text-2xl font-montserrat font-bold my-6 text-center">Top Destinatios</h1>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <img src="https://i.ibb.co/bQxky4V/korea-2777849-1280.jpg" alt="" className="hover:scale-110 transition-transform delay-200"/>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/NZMpQV0/pexels-pixabay-40142.jpg" alt="" className="hover:scale-110 transition-transform delay-200" />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/vwKFyjm/pexels-bohlemedia-920040.jpg" alt="" className="hover:scale-110 transition-transform delay-200" />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/sjtZpHZ/pexels-airamdphoto-21858896.jpg" alt="" className="hover:scale-110 transition-transform delay-200" />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/nDQMxNQ/houses-4093227-1280.jpg" alt="" className="hover:scale-110 transition-transform delay-200" />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/t3pZRCx/sea-192989-1280.jpg" alt="" className="hover:scale-110 transition-transform delay-200" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 flex flex-col items-center">
                            <h1  className="text-2xl font-montserrat font-bold mt-6 text-center">Pay Safely with Us</h1>
                            <p className="py-3 text-gray-500 text-center">The payment is encrypted and transmitted securely with an SSL protocol.</p>
                            <img src={photo} alt="" className="bg-gray-800 mx-auto mb-3" />
                            <p className="flex font-semibold mb-2">Address: <span className="flex flex-col font-normal pl-2">123 Main Street,<span>Cityville, State, Zip Code</span></span></p>
                            <p className="flex font-semibold mb-2">Phone: <span className="font-normal pl-2">+1 (123) 456-7890</span></p>
                            <p className="flex font-semibold mb-2">Email: <spna className="font-normal pl-2">example@example.com</spna></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="text-center pt-6 pb-10 text-white bg-black">© <span> {moment().format('YYYY')}</span><span> Travel Tour by TravelTrance. All Rights Reserved | <a href="#" className="font-medium">Privacy Policy</a> | <a href="#" className="font-medium">Terms and Conditions</a></span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;