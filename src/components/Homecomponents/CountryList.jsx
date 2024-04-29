import {  FaGlobeAsia } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiAfrica } from "react-icons/gi";
import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import "../../App.css";
const CountryList = () => {
    return (
        <div>
            <h1 className="text-center font-montserrat font-bold text-6xl leading-[70px] mt-14 text-gray-600">Choose your most favourite<br/><span className="text-orange-600">tourist spot</span></h1>
            <div className="mt-9 footer-background">
            <div className="h-[100%]  bg-black bg-opacity-70">
            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-14">


    <div className="flex gap-7 p-8">
    <FaGlobeAsia className="text-orange-600 h-36 w-56"/>
    <div>
        <p className="text-white text-2xl font-montserrat font-semibold py-4">01. Asia</p>
        <p className="text-white">Embark on an enchanting voyage through the heart of Asia, where ancient wonders and modern marvels intertwine to create a tapestry of cultural richness and diversity. From the bustling streets of Tokyo to the serene temples of Angkor Wat, every corner offers a glimpse into the vibrant mosaic of Asias captivating allure.</p>
    </div>
</div>

<div className="flex gap-7 p-8">
    <FaGlobeEurope className="text-orange-600 h-36 w-56"/>
    <div>
        <p className="text-white text-2xl font-montserrat font-semibold py-4">02. Europe</p>
        <p className="text-white">Discover the charm of Europes quaint villages and vibrant cities, where every cobblestone alleyway holds a story waiting to be uncovered. From the historic streets of Prague to the sun-kissed shores of the Amalfi Coast, immerse yourself in the beauty and culture of this enchanting continent.</p>
    </div>
</div>


<div className="flex gap-7 p-8">
    <FaEarthAmericas className="text-orange-600 h-36 w-56"/>
    <div>
        <p className="text-white text-2xl font-montserrat font-semibold py-4">03. America</p>
        <p className="text-white">Discover the Americas diverse wonders, from the bustling streets of New York City to the majestic peaks of the Andes. Whether you are exploring the vibrant cultures of Mexico City or marveling at the natural beauty of Yellowstone National Park, each destination promises a journey filled with excitement and discovery.</p>
    </div>
</div>


<div className="flex gap-7 p-8">
    <GiAfrica className="text-orange-600 h-36 w-56"/>
    <div>
        <p className="text-white text-2xl font-montserrat font-semibold py-4">04. Africa</p>
        <p className="text-white">Embark on a journey through the rich tapestry of Africa, where ancient traditions blend seamlessly with breathtaking landscapes. From the vast savannahs of the Serengeti to the vibrant markets of Marrakech, immerse yourself in the vibrant cultures and natural wonders that make this continent truly unique.</p>
    </div>
</div>


<div className="flex gap-7 p-8">
    <PiGlobeHemisphereEastFill className="text-orange-600 h-36 w-56"/>
    <div>
        <p className="text-white text-2xl font-montserrat font-semibold py-4">05. Middle East</p>
        <p className="text-white">Experience the allure of the Middle East, where ancient history meets modern luxury in a captivating fusion. From the towering skyscrapers of Dubai to the timeless beauty of Petra, immerse yourself in the rich tapestry of cultures, flavors, and landscapes that define this dynamic region.</p>
    </div>
</div>


<div className="flex gap-7 p-8">
    <BsGlobeCentralSouthAsia className="text-orange-600 h-36 w-56"/>
    <div>
        <p className="text-white text-2xl font-montserrat font-semibold py-4">06. Central Asia</p>
        <p className="text-white">Embark on an enchanting journey through the heart of Central Asia, where ancient Silk Road cities and stunning landscapes await. From the majestic beauty of the Pamir Mountains to the intricate tilework of Samarkands Registan Square, immerse yourself in the rich history and vibrant cultures of this fascinating region.</p>
    </div>
</div>
</div>
            </div>
        </div>
        </div>
    );
};

export default CountryList;