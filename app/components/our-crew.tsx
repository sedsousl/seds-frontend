import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaSatellite, FaSpaceShuttle, FaUserAstronaut, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './OurCrew.css'; // Import the CSS file

interface CrewMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  specialization: string;
  icon: React.ReactElement;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const crewMembers: CrewMember[] = [
    {
      name: 'Anjali Perera',
      role: 'President',
      imageUrl: 'https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-character-man-businessman-business-suit-looking-camera-isolated-transparent-png-background-277029050.jpg',
      bio: 'Leading SEDS OUSL with a passion for space exploration and science education.',
      specialization: 'Astrophysics',
      icon: <FaRocket className="text-indigo-400 text-2xl" />,
      socialMedia: {
        twitter: 'https://twitter.com/nethinduh',
        linkedin: 'https://linkedin.com/in/nethinduh',
        github: 'https://github.com/nethinduh'
      }
    },
    {
      name: 'Anjali Perera',
      role: 'Vice President',
      imageUrl: 'https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-character-man-businessman-business-suit-looking-camera-isolated-transparent-png-background-277029050.jpg',
      bio: 'A dedicated leader focusing on outreach programs and research initiatives.',
      specialization: 'Aerospace Engineering',
      icon: <FaSatellite className="text-purple-400 text-2xl" />,
      socialMedia: {
        twitter: 'https://twitter.com/anjalip',
        linkedin: 'https://linkedin.com/in/anjalip'
      }
    },
    {
      name: 'Samith Wijesinghe',
      role: 'Advisor',
      imageUrl: 'https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-character-man-businessman-business-suit-looking-camera-isolated-transparent-png-background-277029050.jpg',
      bio: 'Guiding SEDS OUSL with years of experience in space research and education.',
      specialization: 'Space Policy',
      icon: <FaSpaceShuttle className="text-green-400 text-2xl" />,
      socialMedia: {
        linkedin: 'https://linkedin.com/in/samithw',
        github: 'https://github.com/samithw'
      }
    },
  ];

const CrewCard: React.FC<CrewMember> = ({ name, role, imageUrl, bio, specialization, icon, socialMedia }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-96 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="relative w-full h-full">
        <motion.div
          className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-950 to-gray-900 shadow-lg p-6 flex flex-col items-center justify-center backface-hidden"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <img className="w-32 h-32 rounded-full mb-4 border-4 border-indigo-500" src={imageUrl} alt={`${name}'s profile`} />
          <h3 className="text-white text-2xl font-bold text-center">{name}</h3>
          <p className="text-indigo-400 text-lg font-semibold mb-2">{role}</p>
          {icon}
          <p className="text-gray-300 text-sm mt-2">{specialization}</p>
        </motion.div>
        <motion.div
          className="absolute w-full h-full rounded-xl bg-gradient-to-br from-black to-gray-900 shadow-lg p-6 flex flex-col items-center justify-center backface-hidden"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-xl font-bold mb-4">{name}</h3>
          <p className="text-gray-300 text-center mb-4">{bio}</p>
          <div className="flex space-x-4 mt-4">
            {socialMedia.twitter && (
              <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-indigo-400 text-2xl hover:text-indigo-300" />
              </a>
            )}
            {socialMedia.linkedin && (
              <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-indigo-600 text-2xl hover:text-indigo-500" />
              </a>
            )}
            {socialMedia.github && (
              <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-400 text-2xl hover:text-gray-300" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const OurCrew: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6 relative overflow-hidden">
      <div className="absolute inset-0">
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
          className="text-4xl font-bold text-white text-center mb-12 flex items-center justify-center"
        >
          <FaUserAstronaut className="text-indigo-400 mr-4 text-5xl" />
          Our Crew
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {crewMembers.map((member, index) => (
              <CrewCard key={index} {...member} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OurCrew;
