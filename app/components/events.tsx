import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaSpaceShuttle, FaRocket, FaSatellite, FaUserAstronaut, FaClock, FaTicketAlt } from 'react-icons/fa';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  icon: React.ReactElement;
  category: string;
  speaker: string;
  ticketPrice: string;
}

const events: Event[] = [
  {
    title: 'Astro Photography Workshop',
    date: 'October 15, 2024',
    time: '7:00 PM - 9:00 PM',
    location: 'Virtual',
    description: 'Learn the art of capturing the night sky with expert guidance. Discover techniques for long-exposure photography and post-processing to bring out the beauty of the cosmos.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    icon: <FaSatellite className="text-blue-400" />,
    category: 'Workshop',
    speaker: 'Dr. Stella Nova',
    ticketPrice: '$49.99'
  },
  {
    title: 'Space Exploration Seminar',
    date: 'November 5, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'SEDS OUSL Auditorium',
    description: 'Discuss the latest developments in space exploration with industry professionals. Topics include Mars colonization, interstellar travel, and the search for extraterrestrial life.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    icon: <FaSpaceShuttle className="text-purple-400" />,
    category: 'Seminar',
    speaker: 'Cmdr. Jack Cosmos',
    ticketPrice: '$99.99'
  },
  {
    title: 'Robotics and AI in Space',
    date: 'December 10, 2024',
    time: '1:00 PM - 3:00 PM',
    location: 'Virtual',
    description: 'Explore how robotics and AI are being used in space missions. Learn about Mars rovers, autonomous spacecraft, and the future of AI in space exploration.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    icon: <FaRocket className="text-red-400" />,
    category: 'Lecture',
    speaker: 'Dr. Roberta Artificial',
    ticketPrice: '$29.99'
  },
];

const EventCard: React.FC<Event> = ({
  title,
  date,
  time,
  location,
  description,
  image,
  icon,
  category,
  speaker,
  ticketPrice,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all relative group"
  >
    <div
      className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="relative z-10 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        {icon}
      </div>
      <p className="text-blue-300 mb-2 flex items-center">
        <FaCalendarAlt className="mr-2" /> {date}
      </p>
      <p className="text-purple-300 mb-2 flex items-center">
        <FaClock className="mr-2" /> {time}
      </p>
      <p className="text-green-300 mb-4 flex items-center">
        <FaMapMarkerAlt className="mr-2" /> {location}
      </p>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="shadow-lg border border-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
        <span className="text-yellow-300 flex items-center">
          <FaUserAstronaut className="mr-2" /> {speaker}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-green-400 font-bold flex items-center">
          <FaTicketAlt className="mr-2" /> {ticketPrice}
        </span>
        <button className="relative px-6 py-2 overflow-hidden font-bold text-white rounded-full group">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative">Register Now</span>
        </button>
      </div>
    </div>
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    ></motion.div>
  </motion.div>
);

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const results = events.filter(event =>
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter === '' || event.category === categoryFilter) &&
      (locationFilter === '' || event.location === locationFilter)
    );
    setFilteredEvents(results);
  }, [searchTerm, categoryFilter, locationFilter]);

  const categories = Array.from(new Set(events.map(event => event.category)));
  const locations = Array.from(new Set(events.map(event => event.location)));

  return (
    <div className="bg-gray-950 min-h-screen p-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white text-center mb-8"
        >
          Upcoming Events
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </motion.div>
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;

