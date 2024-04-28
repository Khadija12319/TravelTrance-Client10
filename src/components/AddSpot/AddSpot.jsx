import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/Context';

const AddSpot = () => {
    const {user} = useContext(AuthContext);
    const handleAddSpot= e =>{
        e.preventDefault();
        const form = e.target;
        const countryname= form.countryname.value;
        const location=form.location.value;
        const season=form.season.value;
        const spotname=form.spotname.value;
        const description=form.description.value;
        const cost=form.cost.value;
        const time= form.time.value;
        const visitor= form.visitor.value;
        const uname= form.uname.value;
        const uemail= form.uemail.value;
        const photo= form.photo.value;

        const formdata={countryname,location,season,spotname,description,cost,time,visitor,uname,uemail,photo};

        console.log(formdata);
        
        fetch('http://localhost:5000/spots',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(formdata)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have inserted a new tourist spot details',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  form.reset();
            }
        })
     }
    return (
        <div className="pt-[50px] mb-[110px]">
            <div  className="container mx-auto w-3/5 bg-orange-100 py-[70px] px-[112px]">
                <h1 className="text-[#374151] text-[45px] font-normal pb-8 text-center font-rancho drop-shadow-lg">Add New Tourist Spot</h1>
                <p className="text-[#1B1A1A80] text-center font-normal leading-8 text-lg pb-8 font-raleway">Contribute to our travel database by adding new tourist spots through a user-friendly form. Share details like the spots name, location, and description, enriching our collection of exciting destinations. Your input helps create fresh and memorable travel plans for everyone!</p>
                <form className="space-y-6" onSubmit={handleAddSpot}>

                    {/* countryname and location */}
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Country Name</label>
                            <select className="p-3 rounded-md" name="countryname" id="">
                                <option>--Please select a country--</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Location</label>
                            <input  className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="location" id="" placeholder="Enter location"/>
                        </div>
                    </div>
        

                    {/* season and spotname */}
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Seasonality</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="season" id="" placeholder="Enter season. ex:summer"/>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Spot Name</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="spotname" id="" placeholder="Enter spot name"/>
                        </div>
                    </div>


                    {/* description and cost */}
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Short Description</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="description" id="" placeholder="Enter a description"/>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Average Cost</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="number" name="cost" id="" placeholder="Enter Agerage Cost"/>
                        </div>
                    </div>

                    {/* time and visitor */}
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Travel Time</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="time" id="" placeholder="Enter time .ex: 7 days"/>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Visitor/Year</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="number" name="visitor" id="" placeholder="Enter visitor per year"/>
                        </div>
                    </div>


                    {/* uname and uemail */}
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">User Name</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="uname" id="" placeholder="Enter user name" value={user?.displayName} autoComplete={user?.displayName}/>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">User Email</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="uemail" id="" value={user?.email} autoComplete={user?.email}/>
                        </div>
                    </div>


                    {/* photo */}
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-raleway font-semibold leading-8 text-xl">Add spot photo</label>
                            <input className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" type="text" name="photo" id="" placeholder="Enter Photo URL"/>
                        </div>
                    </div>

                    <button className="w-full border-[2px] border-[#331A15] bg-[#D2B48C] py-3 text-[#331A15] font-rancho text-2xl font-normal">Add Tourist Spot</button>
                </form>
            </div>
        </div>
    );
};



export default AddSpot;