import Hero from "./components/Hero"
import {WhoWeAre} from "./components/WhoWeAre"

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      {/* Content Container */}
      <div className="overflow-auto relative z-10 flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-30 text-white">
        <Hero />
        <WhoWeAre />

        {/* Add more components here */}
        
      </div>
    </div>
  );
}
