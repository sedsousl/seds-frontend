"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const texts = `SEDS OUSL (Students for the Exploration and Development of Space at the Open University of Sri Lanka) is a passionate community of students united by a shared interest in space exploration, innovation, and technology. At SEDS OUSL, we are driven by a vision of a future where space exploration is accessible to all.`;

export function WhoWeAre() {
    return (
        <div className="min-h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full">
            <div className="max-w-7xl mx-auto p-4 h-screen flex flex-col justify-center">
                <h1 className="relative z-10 text-4xl md:text-7xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-gray-600 text-center font-bold uppercase">
                    Who We Are...
                </h1>
                <img src="/seds-logo.png" alt="SEDS OUSL" className="md:w-1/3 w-4/5 mx-auto my-1" />
                <div className="max-w-full font-bold mx-auto text-center relative z-10">
                    <TextGenerateEffect words={texts} className="text-white" filter={false} duration={10.0} />
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>

    );
}
