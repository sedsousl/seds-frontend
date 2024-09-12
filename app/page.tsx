import Hero from "./components/Hero"
import {WhoWeAre} from "./components/WhoWeAre"

export default function Home() {
  return (
    <div>
      <video autoPlay muted loop className="fixed end-0 bottom-0 min-h-full min-w-full">
          <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute flex flex-col h-full overflow-auto">
        <Hero />
        <WhoWeAre />

        // Add more components here
        
      </div>
    </div>
  );
}
