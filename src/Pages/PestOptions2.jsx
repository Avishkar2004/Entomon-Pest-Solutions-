import React from 'react';
import { useHistory } from 'react-router-dom';
import Ant from "../assets/Option/ant.png";
import BedBug from "../assets/Option/bedbug.png";
import Cockroach from "../assets/Option/cockroach.png";
import FleaFly from "../assets/Option/flea.png";
import Mosquito from "../assets/Option/mosquito.png";
import Mouse from "../assets/Option/mouse.png";
import Termite from "../assets/Option/termite.png";
import WoodBorer from "../assets/Option/wood.png";

function PestOptions2() {
    const history = useHistory();

    const redirectTo = (path) => {
        history.push(path);
    };



    return (
        <section className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Pest Control Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <OptionCard
                    image={Termite}
                    alt="Termite"
                    title="Termite Control"
                    description="Protect your home from termites."
                    onClick={() => redirectTo("/termite")}
                />
                <OptionCard
                    image={Cockroach}
                    alt="Cockroach"
                    title="Cockroach Control"
                    description="Get rid of cockroaches effectively."
                    onClick={() => redirectTo("/cockroach")}
                />
                <OptionCard
                    image={Mosquito}
                    alt="Mosquito"
                    title="Mosquito Control"
                    description="Enjoy a mosquito-free environment."
                    onClick={() => redirectTo("/mosquito")}
                />
                <OptionCard
                    image={Mouse}
                    alt="Mouse"
                    title="Mouse Control"
                    description="Keep mice away from your premises."
                    onClick={() => redirectTo("/mouse")}
                />
                <OptionCard
                    image={Ant}
                    alt="Ant"
                    title="Ant Control"
                    description="Eliminate ant colonies effectively."
                    onClick={() => redirectTo("/ant")}
                />
                <OptionCard
                    image={WoodBorer}
                    alt="Wood Borer"
                    title="Wood Borer Control"
                    description="Protect wooden furniture from borers."
                    onClick={() => redirectTo("/woodborer")}
                />
                <OptionCard
                    image={BedBug}
                    alt="Bed Bug"
                    title="Bed Bug Control"
                    description="Sleep peacefully without bed bugs."
                    onClick={() => redirectTo("/bedbug")}
                />
                <OptionCard
                    image={FleaFly}
                    alt="Flea and Fly"
                    title="Flea & Fly Control"
                    description="Get rid of fleas and flies effectively."
                    onClick={() => redirectTo("/fleafly")}
                />
            </div>
        </section>
    );
}

const OptionCard = ({ image, alt, title, description, onClick }) => (
    <div onClick={onClick} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg text-center transition duration-300 cursor-pointer">
        <img src={image} alt={alt} className="object-cover mx-auto" />
        <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex justify-center items-center bg-gray-100 py-3">
            <button
                onClick={onClick}
                className="text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white transition duration-300"
            >
                Learn More
            </button>
        </div>
    </div>
);

export default PestOptions2;
