import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaRocket, FaRobot, FaCampground, FaMicroscope, FaSatellite, FaChartLine, FaCamera } from 'react-icons/fa';

interface Slide {
  title: string;
  image: string;
  description: string;
  icon: React.ReactElement;
}

const slides: Slide[] = [
  {
    title: 'Rover and Robotics Division',
    image: 'divistion-img/Rover-and-Robotics-Division.jpg',
    description: 'Exploring new frontiers with cutting-edge robotics and rover technology. ',
    icon: <FaRobot className="text-4xl mb-4 text-gray-300" />
  },
  {
    title: 'Rocketry Division',
    image: 'https://images.pexels.com/photos/586031/pexels-photo-586031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Pushing the boundaries of space exploration through advanced rocketry.',
    icon: <FaRocket className="text-4xl mb-4 text-gray-300" />
  },
  {
    title: 'Observation and Camping Division',
    image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bringing space closer to Earth with state-of-the-art observation techniques.',
    icon: <FaCampground className="text-4xl mb-4 text-gray-300" />
  },
  {
    title: 'Biomedical & Earth Science Division',
    image: 'https://www.cumbria.ac.uk/study/courses/undergraduate/biomedical-sciences/biomed.jpg',
    description: 'Bridging the gap between space technology and Earth sciences.',
    icon: <FaMicroscope className="text-4xl mb-4 text-gray-300" />
  },
  {
    title: 'Satellite & IT Division',
    image: 'https://wp.technologyreview.com/wp-content/uploads/2020/01/satellite-1820064-2.jpg?w=2800?crop=179px,0px,2621px,1474px&w=2800px',
    description: 'Developing cutting-edge satellite technology and IT solutions for space missions.',
    icon: <FaSatellite className="text-4xl mb-4 text-gray-300" />
  },
  {
    title: 'Financial & Management Division',
    image: 'divistion-img/Financial&Management-Division.jpg',
    description: 'Ensuring smooth operations and financial stability for our space endeavors.',
    icon: <FaChartLine className="text-4xl mb-4 text-gray-300" />
  },
  {
    title: 'Media Division',
    image: 'https://images.pexels.com/photos/7231218/pexels-photo-7231218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bringing the excitement of space exploration to the public through engaging media.',
    icon: <FaCamera className="text-4xl mb-4 text-gray-300" />
  },
];

const Slides3D: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className=" h-screen mx-auto px-40 bg-gradient-to-tr from-gray-950 to-gray-900">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-200 py-6">Divisions</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.5}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        navigation={false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper py-10"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] hover:shadow-2xl shadow-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-tr from-gray-950 to-black shadow-lg shadow-gray-900 border border-gray-800 bg-clip-border rounded-xl h-[550px] overflow-hidden relative"
            >
               {/* Starry background */}
               <div className="absolute inset-0 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.5,
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative flex flex-col h-full text-gray-200 z-10">
                  <div className="relative h-56 sm:h-64 md:h-72 mx- mt- overflow-hidden text-white shadow-xl shadow-gray-900 bg-clip-border rounded-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col items-center">
                    {slide.icon}
                    <h5 className="block mb-1 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-gray-200 text-center">
                      {slide.title}
                    </h5>
                    <p className="block font-sans text-base text-gray-300 antialiased leading-relaxed text-inherit text-center">
                      {slide.description}
                    </p>
                  </div>
                  <div className="pb-5 flex flex-row justify-center items-center">
                  <button
                      className="relative px-6 py-2 overflow-hidden font-bold text-white rounded-full group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                      <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                      <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"></span>
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                      <span className="relative">Explore More</span>
                    </button>
                  </div>
                </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-2 space-x-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-3 w-3 rounded-full ${activeSlide === index ? "bg-gray-500" : "bg-gray-300"}`}
            animate={{
              scale: activeSlide === index ? 1.2 : 1,
              backgroundColor: activeSlide === index ? "#616161" : "#D1D5DB",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slides3D;
