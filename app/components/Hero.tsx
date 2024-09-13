import { FaAnglesDown, FaInfo } from "react-icons/fa6";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { FaHouse } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaIdBadge } from "react-icons/fa6";
import { FaTrello } from "react-icons/fa6";

export default function Hero() {
    return (

        <div className="flex gap-8 md:gap-0 flex-col justify-between min-h-screen w-full bg-opacity-20 text-white">
            <nav className="flex justify-center md:justify-between top-0 w-full h-20 bg-transparent items-center transition-all duration-400 px-5">
                <img src="/seds-logo.png" alt="SEDS OUSL" className="w-20 hidden md:block" />
                <ul className="flex gap-5 justify-center items-center font-sans text-base h-full">
                    <li className="group transition duration-300">
                        <a href="/">Home</a>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                    </li>
                    <li className="group transition duration-300">
                        <a href="/about">About</a>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                    </li>
                    <li className="group transition duration-300">
                        <a href="/events">Events</a>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                    </li>
                    <li className="group transition duration-300">
                        <a href="/projects">Projects</a>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                    </li>
                    <li className="group transition duration-300">
                        <a href="/contact">Contact</a>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded-full bg-white"></span>
                    </li>
                </ul>
                {/* <div className="w-20"></div> */}
            </nav>
            <Navbar />
            <div className="p-3 text-center md:text-start pb-16 uppercase">
                <h1 className="md:ps-24 text-xl md:text-5xl font-mono text-zinc-200 md:text-gray-400">Welcome to</h1>
                <img src="/seds-logo.png" alt="SEDS OUSL" className="md:w-1/3 w-max md:mx-0 mx-auto m-3" />
                {/* <h1 className="text-6xl">SEDS OUSL</h1> */}
                <p className="md:ps-24 pb-2 text-2xl md:text-3xl font-mono italic">Students for the Exploration and Development of Space</p>
                <p className="md:ps-24 pb-5 text-2xl md:text-3xl font-mono text-amber-200 italic">Open University of Sri Lanka</p>
                <div className="hidden md:flex justify-center text-base items-center gap-2 pt-10">
                    <FaAnglesDown className="animate-bounce" />
                    Scroll Down
                </div>
            </div>
            <div className="md:hidden flex justify-center text-base items-center gap-2 pb-5">
                <FaAnglesDown className="animate-bounce" />
                Scroll Down
            </div>
        </div>



    );
}


export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <FaHouse className="h-5 w-5 text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <FaCircleInfo className="h-5 w-5 text-white" />,
        },
        {
            name: "Events",
            link: "/events",
            icon: <FaCalendar className="h-5 w-5 text-white" />,
        },
        {
            name: "Projects",
            link: "/projects",
            icon: <FaTrello className="h-5 w-5 text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: <FaIdBadge className="h-5 w-5 text-white" />,
        },
    ];
    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}