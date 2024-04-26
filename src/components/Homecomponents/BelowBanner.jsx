const BelowBanner = () => {
    return (
        <div className="container mx-auto mt-16 mb-16">
            <h3 className="text-center text-3xl font-playfair font-extrabold text-orange-600">Unforgettable Journeys in Asia</h3>
            <h3 className="text-center py-5 font-montserrat text-black text-6xl font-bold">Experience of Our Travelers</h3>
            <p className="text-center py-3 font-montserrat font-light text-black text-base leading-9">Step into the captivating tales spun by our adventurers. Each journey is a tapestry of discovery, woven<br /> with moments that linger long after the return. Explore the untold narratives of wanderlust, where every destination becomes a chapter in a travelers memoir. Embrace<br/> the allure of the unknown, for in these expeditions, true treasures lie in the experiences shared.</p>
            <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10 flex items-center">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://i.ibb.co/YBnCjq3/saint-martin-997514-1280.jpg"
            />
            <p className="text-white font-montserrat text-2xl font-bold text-center -translate-y-14">Bangladesh</p>
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://i.ibb.co/hyqJWF8/temple-7108054-1280.jpg"
            />
            <p className="text-white font-montserrat text-2xl font-bold text-center -translate-y-14">Thailand</p>
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
              src="https://i.ibb.co/x3hgSYj/cliff-5954980-1280.jpg"
            />
            <p className="text-white font-montserrat text-2xl font-bold text-center -translate-y-14">Indonesia</p>
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://i.ibb.co/zZ9G5Ww/angkor-809753-1280.jpg"
            />
            <p className="text-white font-montserrat text-2xl font-bold text-center -translate-y-14">Malaysia</p>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://i.ibb.co/vZ3BmGs/twilight-7429902-1280.jpg"
            />
            <p className="text-white font-montserrat text-2xl font-bold text-center -translate-y-14">Vietnam</p>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://i.ibb.co/0KPSLf5/lan-ha-bay-1531073-1280.jpg"
            />
            <p className="text-white font-montserrat text-2xl font-bold text-center -translate-y-14">Cambodia</p>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default BelowBanner;