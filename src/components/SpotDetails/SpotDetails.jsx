import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot= useLoaderData();
    console.log(spot);
    return (
        <div className="container mx-auto">
            <div>
                <div>
                    <img src={spot.photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;