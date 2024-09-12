import { FaAnglesDown } from "react-icons/fa6";

export default function Hero() {
    return (

            <div className="flex flex-col justify-between bg-black min-h-screen w-full bg-opacity-20 text-white">
                <nav className="flex justify-between top-0 w-full h-20 bg-transparent items-center transition-all duration-400">
                    <img src="/seds-logo.png" alt="SEDS OUSL" className="w-20" />
                    <ul className="flex justify-center items-center font-sans text-base h-full">
                        <li className="px-5 group transition duration-300">
                            <a href="/">Home</a>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                        </li>
                        <li className="px-5 group transition duration-300">
                            <a href="/about">About</a>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                        </li>
                        <li className="px-5 group transition duration-300">
                            <a href="/events">Events</a>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                        </li>
                        <li className="px-5 group transition duration-300">
                            <a href="/projects">Projects</a>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                        </li>
                        <li className="px-5 group transition duration-300">
                            <a href="/contact">Contact</a>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                        </li>
                    </ul>
                    {/* <div className="w-20"></div> */}
                </nav>
                <div className="bottom-0 p-3 pb-16 uppercase">
                    <h1 className="ps-24 text-5xl font-mono text-gray-400">Welcome to</h1>
                    <img src="/seds-logo.png" alt="SEDS OUSL" className="w-1/3" />
                    {/* <h1 className="text-6xl">SEDS OUSL</h1> */}
                    <p className="ps-24 pb-2 text-3xl font-mono italic">Students for the Exploration and Development of Space</p>
                    <p className="ps-24 pb-5 text-3xl font-mono text-amber-200 italic">Open University of Sri Lanka</p>
                    <div className="flex justify-center text-base items-center gap-2 pt-10">
                        <FaAnglesDown className="animate-bounce"/>  
                        Scroll Down
                    </div>
                </div>
            </div>

  

    );
}