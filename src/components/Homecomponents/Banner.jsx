import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import '../../App.css'
const Banner = () => {
    const banner=[
        {
            "title": "An Exciting Journey",
            "description": "Embark on an adventure of a lifetime with our thrilling journey packages.",
            "button": "Explore Now",
            "image": "https://i.ibb.co/Y7bcSM2/hallstatt-8357170-1280.jpg"
          },
          {
            "title": "Discover Hidden Treasures",
            "description": "Uncover the secrets of the world with our exploration tours to exotic destinations.",
            "button": "Learn More",
            "image": "https://i.ibb.co/gW3vffR/malaysia-1864676-1280.jpg"
          },
          {
            "title": "Escape to Paradise",
            "description": "Indulge in luxury and relaxation as you escape to picturesque destinations.",
            "button": "Book Now",
            "image": "https://i.ibb.co/ZHTY08p/lake-8357182-1280.jpg"
          },
          {
            "title": "Adrenaline-Pumping Adventures",
            "description": "Experience the thrill of a lifetime with our adrenaline-fueled adventure trips.",
            "button": "Get Started",
            "image": "https://i.ibb.co/3181gR0/island-6081943-1280.jpg"
          }        
    ];
    
    return (
        <div className=''>
            <Swiper
         style={{
            '--swiper-pagination-color': '#FFF',
          }}
        spaceBetween={30} 
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
      >
                <SwiperSlide style={{ backgroundImage: `url(${banner[0].image})`,backgroundPosition:"center",backgroundSize:"cover", height:"600px"}} className='bg-no-repeat'>
                    <div className='flex justify-center items-center flex-col h-[100%] bg-gradient-to-br from-blue-700 via-transparent to-transparent bg-opacity-25'>
                        <div className='space-y-4'>
                            <h2 className='font-montserrat text-white text-6xl font-bold' data-aos="fade-up" data-aos-delay="500">{banner[0].title}</h2>
                            <p className='text-white font-playfair text-3xl font-semibold' data-aos="fade-up" data-aos-delay="700">{banner[0].description}</p>
                            <button className='text-white font-montserrat bg-orange-600 px-5 py-3 font-bold rounded-lg outline-none' data-aos="fade-up" data-aos-delay="900">{banner[0].button}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${banner[1].image})`,backgroundPosition:"center",backgroundSize:"cover", height:"600px"}} className='bg-no-repeat'>
                <div className='flex justify-center items-center flex-col h-[100%] bg-gradient-to-br from-blue-700 via-transparent to-transparent bg-opacity-25'>
                    <div className='space-y-4'>
                        <h2 className='font-montserrat text-white text-6xl font-bold' data-aos="fade-up" data-aos-delay="1700">{banner[1].title}</h2>
                        <p className='text-white font-playfair text-3xl font-semibold' data-aos="fade-up" data-aos-delay="1900">{banner[1].description}</p>
                        <button className='text-white font-montserrat bg-orange-600 px-5 py-3 font-bold rounded-lg outline-none' data-aos="fade-up" data-aos-delay="2100">{banner[1].button}</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${banner[2].image})`,backgroundPosition:"center",backgroundSize:"cover", height:"600px"}} className='bg-no-repeat'>
            <div className='flex justify-center items-center flex-col h-[100%] bg-gradient-to-br from-blue-700 via-transparent to-transparent bg-opacity-25'>
                <div className='space-y-4'>
                    <h2 className='font-montserrat text-white text-6xl font-bold' data-aos="fade-up" data-aos-delay="3800">{banner[2].title}</h2>
                    <p className='text-white font-playfair text-3xl font-semibold' data-aos="fade-up" data-aos-delay="4000">{banner[2].description}</p>
                    <button className='text-white font-montserrat bg-orange-600 px-5 py-3 font-bold rounded-lg outline-none' data-aos="fade-up" data-aos-delay="4200">{banner[2].button}</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${banner[3].image})`,backgroundPosition:"center",backgroundSize:"cover", height:"600px"}} className='bg-no-repeat'>
        <div className='flex justify-center items-center flex-col h-[100%] bg-gradient-to-br from-blue-700 via-transparent to-transparent bg-opacity-25'>
            <div className='space-y-4'>
                <h2 className='font-montserrat text-white text-6xl font-bold' data-aos="fade-up" data-aos-delay="5900">{banner[3].title}</h2>
                <p className='text-white font-playfair text-3xl font-semibold' data-aos="fade-up" data-aos-delay="6100">{banner[3].description}</p>
                <button className='text-white font-montserrat bg-orange-600 px-5 py-3 font-bold rounded-lg outline-none' data-aos="fade-up" data-aos-delay="6300">{banner[3].button}</button>
            </div>
        </div>
    </SwiperSlide>        
      </Swiper>
        </div>
    );
};

export default Banner;